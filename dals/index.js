const mongoose = require('mongoose');
const Vote = require('../models/vote');
const Poll = require('../models/poll');
const User = require('../models/user');

exports.createPoll = async (params) => {

    return Poll.create({
        question: params.question,
        answers: params.answers,
        createdBy: params.createdBy
    });
};

exports.insertVote = async (vote) => {

    const query = {
        '_id': vote.pollId
    };

    const update = { $push: { votes: vote } };

    const opts = { multi: false, new: true };

    return Poll.findOneAndUpdate(query, update, opts);
}

exports.createUser = async (params) => {

    return User.create({
        email: params.email,
        password: params.password
    });
};

exports.createVote = async (params) => {

    return Vote.create({
        pollId: params.pollId,
        answer: params.answer,
        createdBy: params.createdBy
    });
};

exports.findPolls = async () => {

    const result = await Poll.find({});

    return {
        total: result.length,
        result
    };
};

exports.findPoll = async (params) => {

    const query = {
        '_id': params.id
    }

    return Poll.find(query);
};
