const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ReceiverSchema = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Others'],
        default: 'Male'
    },
    relationship: {
        type: String,
    },
    closeness: {
        type: Number,
        min: 0,
        max: 10
    },
    picture: {
        type: String
    },
    sender: {
        type: String
    }
});

module.exports = mongoose.model('Receiver', ReceiverSchema);
