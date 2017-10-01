const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const QuestionSchema = mongoose.Schema({
    question: {
        type: String
    },
    answer: {
        type: String
    }
});

module.exports = mongoose.model('Question', QuestionSchema);