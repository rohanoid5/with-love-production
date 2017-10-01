const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Receiver = require('./receiver');
const Question = require('./question_minimal');
const User = require('./user');

const LetterMinimalSchema = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    type: {
      type: String
    },
    title: {
        type: String
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'Receiver'
    },
    description: {
        type: String
    },
    time_stamp: {
        type: Date,
        default: Date.now
    },
    questions: [{
        question: {
          type: String
        },
        answer: {
          type: String
        }
    }],
    author: {
        type: String
    }
});

module.exports = mongoose.model('LetterMinimal', LetterMinimalSchema);
