const express = require('express');
const router = express.Router();
const passport = require('passport');
const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const Letter = require('../models/letter_minimal');

router.get('/', (req, res) => {
    res.setHeader('content-type', 'application/json');
    res.json("location is root.")
});

router.post('/register', (req, res, next) => {
    res.setHeader('content-type', 'application/json');
    crypto.randomBytes(20, function(err, buf) {
        if (err) {
            res.status(400).json({
                message: err
            });
        } else {
            let token = buf.toString('hex');
            let newAdmin = new Admin({
                email: req.body.email,
                password: req.body.password,
                activeToken: token
            });
            Admin.addAdmin(newAdmin, (err, user) => {
                if (err) {
                    res.json({ status: 500, message: err });
                } else {
                    res.json({ status: 200, message: "user has  been registered." });
                }
            });
        }
    });
});

router.get('/confirm/:token', (req, res, next) => {
    res.setHeader('content-type', 'application/json');
    Admin.findOne({ activeToken: req.params.token }, (err, newAdmin) => {
        if (err) {
            res.status(500).json({
                message: err
            });
        } else {
            newAdmin.active = true;
            newAdmin.save((err) => {
                if (err)
                    res.status(400).json({
                        message: err
                    });
                else {
                    res.status(200).json({
                        message: newAdmin
                    });
                }
            })
        }
    });
});

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.setHeader('content-type', 'application/json');
    res.json({ admin: req.admin, message: "you are in the profile route." });
});

router.post('/authenticate', (req, res, next) => {
    res.setHeader('content-type', 'application/json');
    let password = req.body.password;
    let email = req.body.email;

    Admin.getAdminByEmail(email, (err, admin) => {
        if (err) throw err;
        if (!admin) {
            return res.status(400).json({
              success: false, completed: true, message: 'Admin not found'
            });
        }

        // if(!user.active)
        // 	return res.status(400).json({success: false, completed: false, user: user});
        else {
            Admin.comparePassword(password, admin.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    const token = jwt.sign(admin, "My app secret", {
                        expiresIn: 604800
                    });

                    res.status(200).json({
                        success: true,
                        token: 'JWT ' + token,
                        admin: admin,
                        message: "Success"
                    });
                } else {
                    return res.status(400).json({ success: false, message: 'Wrong password' });
                }
            });
        }
    });
});

router.get('/paid_letters',
passport.authenticate('jwt', { session: false }), (req, res, next) => {
  res.setHeader('content-type', 'application/json');
  Letter.find({ payment: 'complete', status: 'pending' }, (err, data) => {
    if(err) {
      res.status(400).json({
        data: err
      });
    } else {
      res.status(200).json({
        letter: data
      });
    }
  });
});

router.get('/unpaid_letters',
passport.authenticate('jwt', { session: false }), (req, res, next) => {
  res.setHeader('content-type', 'application/json');
  Letter.find({ payment: 'Incomplete', status: 'pending' }, (err, data) => {
    if(err) {
      res.status(400).json({
        data: err
      });
    } else {
      res.status(200).json({
        letter: data
      });
    }
  });
});

router.get('/dispatched_letters',
passport.authenticate('jwt', { session: false }), (req, res, next) => {
  res.setHeader('content-type', 'application/json');
  Letter.find({ payment: 'complete', status: 'dispatched' }, (err, data) => {
    if(err) {
      res.status(400).json({
        data: err
      });
    } else {
      res.status(200).json({
        letter: data
      });
    }
  });
});

router.get('/dispatch_letters/:id',
passport.authenticate('jwt', { session: false }), (req, res, next) => {
  res.setHeader('content-type', 'application/json');
  Letter.findById(req.params.id, (err, data) => {
    if(err) {
      res.status(400).json({
        data: err
      });
    } else {
      data.status = 'dispatched';
      data.save((err, newData) => {
        if(err) {
          res.status(400).json({
            data: err
          });
        } else {
          res.status(400).json({
            data: newData
          });
        }
      })
    }
  });
});

router.get('/logout', (req, res) => {
    req.logout();
    res.setHeader('content-type', 'application/json');
    res.json({ "status": "Logged out" });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    console.log("Not logged in");
    res.setHeader('content-type', 'application/json');
    res.json({ "status": "Not logged in" });
};

module.exports = router;
