const mongoose = require('mongoose');
const Vote = require('../models/vote');

exports.create = async (vote) => {
    return await Vote.create({
        title: vote.title,
        description: vote.description
    })
}