const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
    pollId: { type: String, required: true }, // type: Schema.Types.ObjectId
    answer: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: String, required: true }
});

module.exports = mongoose.model('Vote', VoteSchema);
