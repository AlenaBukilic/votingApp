const dals = require('../dals');
const facade = require('../facade');

exports.createPolls =  async (req, res) => {

    const poll = {
        question: req.payload.question,
        answers: req.payload.answers,
        createdBy: req.params.userId
    };
    return dals.createPoll(poll);
}

exports.createUsers = async (req, res) => {

    const user = {
        email: req.payload.email,
        password: req.payload.password
    };
    return dals.createUser(user);
}

exports.createVotes = async (req, res) => {

    const vote = {
        pollId: req.params.pollId,
        answer: req.payload.answer,
        createdBy: req.params.userId
    };
    return facade.createVote(vote);
}

exports.viewPolls = async (req, res) => {

    return dals.findPolls();
}

exports.viewPoll = async (req, res) => {

    const params = {
        id: req.params.id
    };

    return dals.findPoll(params);
}

exports.viewUsers =  async (req, res) => {

    const params = req.params;

    return dals.findUsers(params);
}

exports.viewVotes =  async (req, res) => {

    const params = req.params

    return dals.findVotes(params);
}