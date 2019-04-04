const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* votes: {
    answer1: Number,
    answer2: Number
    ...
}
*/

const PollSchema = new Schema({
    question: { type: String, required: true },
    answers: { type: Array, required: true },
    votes: { type: Array, default: [] },
    createdBy: { type: String, required: true } // type: Schema.Types.ObjectId
});

module.exports = mongoose.model('Poll', PollSchema);
