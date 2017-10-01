const express = require('express');
const router = express.Router({
    mergeParams: true
});
const passport = require('passport');
const User = require('../models/user');
const Question = require('../models/question_minimal');
const Letter = require('../models/letter_minimal');
const Receiver = require('../models/receiver');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.setHeader('content-type', 'application/json');

    let letter = new Letter({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description,
        receiver: req.body.receiver,
        author: req.user.email,
        type: req.body.type,
        questions: req.body.questions
    });

    letter.save((err, savedLetter) => {
      if (err)
          res.status(400).json({
              message: err
          });
      else
          res.status(200).json({
              message: savedLetter
          });
    });
});

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.setHeader('content-type', 'application/json');
    Letter.find({ author: req.user.email }, (err, data) => {
        if (err)
          res.status(400).json({
            letter: err
          });
        else {
          res.status(200).json({
            letter: data
          });
        }
    });
});

router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.setHeader('content-type', 'application/json');
    Letter.findById(req.params.id, (err, data) => {
        if (err)
          res.status(400).json({
            letter: err
          });
        else {
          res.status(200).json({
            letter: data
          });
        }
    });
});

module.exports = router;
