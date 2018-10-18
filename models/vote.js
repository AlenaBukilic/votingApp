const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
    title: {
        type: String,
        required: 'Please enter your issue title'
    },
    description: {
        type: String,
        required: 'Please explain your issue'
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Vote', VoteSchema);
