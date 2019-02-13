const mongoose = require('mongoose');
const Vote = require('../models/vote');
const Poll = require('../models/poll');
const User = require('../models/user');

exports.createPoll = async (params) => {

    return Poll.create({
        question: params.question,
        answers: params.answers,
        creator: params.creator
    });
};

exports.createUser = async (params) => {

    return User.create({
        email: params.email,
        password: params.password
    });
};

exports.createVote = async (params) => {

    return Vote.create({
        pollId: params.pollId,
        answer: params.answer
    });
};

exports.findPolls = async (params) => {

    return Poll.find({
        // params
    });
};
