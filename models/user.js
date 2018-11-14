const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, required: true},
    password: { type: String, required: true }, // passwordHash
    createdAt: { type: Date, default: Date.now },
    polls: { type: Array, default: null }
});

module.exports = mongoose.model('User', UserSchema);
