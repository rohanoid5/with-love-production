const express = require('express');
const router = express.Router({
    mergeParams: true
});
const passport = require('passport');
const User = require('../models/user');
const Receiver = require('../models/receiver');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary');
const path = require('path');
const uploadDir = path.join(__dirname, 'public');
const fs = require('fs');
mongoose.Promise = require('bluebird');

cloudinary.config({
    cloud_name: 'getignitor',
    api_key: '926758443527987',
    api_secret: 'aXqNf9R-1JGIi-Tt7CWkmq79AY4'
});

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    if (!req.files)
        return res.status(400).json({ message: "File not found." });
    let sampleFile = req.files.image;
    let uploadPath = path.join(uploadDir, sampleFile.name);
    res.setHeader('content-type', 'application/json');
    sampleFile.mv(uploadPath, function(err) {
        if (err)
          return res.status(400).json({ message: err });
        cloudinary.uploader.upload(uploadPath, function(result) {
            // res.send(result);
            fs.unlink("./routes/public/" + sampleFile.name, (err) => {
                if (err) {
                    return res.status(400).json({ message: err });
                } else {
                    console.log('successfully deleted local image');
                    //console.log(result)
                    let receiver = new Receiver({
                        _id: new mongoose.Types.ObjectId(),
                        name: req.body.name,
                        gender: req.body.gender,
                        relationship: req.body.relationship,
                        closeness: req.body.closeness,
                        sender: req.user.email,
                        picture: result.url
                    });
                    receiver.save((err, data) => {
                        if (err)
                            res.status(400).json({
                                receiver: err
                            });
                        else {
                            res.status(200).json({
                                receiver: data
                            });
                        }
                    });
                }
            });

        });
    });
});

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.setHeader('content-type', 'application/json');
    Receiver.find({ sender: req.user.email }, (err, data) => {
        if (err)
            res.status(400).json({
                receiver: err
            });
        else {
            res.status(200).json({
                receiver: data
            });
        }
    });
});

router.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.setHeader('content-type', 'application/json');
    Receiver.findById(req.params.id, (err, data) => {
        if (err)
            res.status(400).json({
                message: err
            });
        else {
            if (req.body.first_name != null)
                data.first_name = req.body.first_name;
            if (req.body.last_name != null)
                data.last_name = req.body.last_name;
            if (req.body.gender != null)
                data.gender = req.body.gender;
            if (req.body.relationship != null)
                data.relationship = req.body.relationship;
            if (req.body.closeness != null)
                data.closeness = req.body.closeness;
            if (req.body.picture != null)
                data.picture = req.body.picture;
            data.save((err, newData) => {
                if (err)
                    res.status(400).json({ receiver: err });
                else
                    res.status(200).json({ receiver: newData });
            });
        }
    });
});

router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.setHeader('content-type', 'application/json');
    Receiver.findById(req.params.id, (err, data) => {
        if (err)
            res.status(400).json({
                receiver: err
            });
        else {
            res.status(200).json({
                receiver: data
            });
        }
    });
});

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.setHeader('content-type', 'application/json');
    Receiver.find({ sender: req.user.email }, (err, data) => {
        if (err)
            res.status(400).json({
                receivers: err
            });
        else {
            res.status(200).json({
                receivers: data
            });
        }
    });
});

module.exports = router;
