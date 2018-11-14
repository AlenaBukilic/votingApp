const dals = require('../dals/index');

exports.createPolls =  async (req, res) => {

    const poll = {
        question: req.payload.question,
        answers: req.payload.answers,
        creator: req.params.userId
    }
    return dals.createPoll(poll);
}

exports.createUsers = async (req, res) => {

    const user = {
        email: req.payload.email,
        password: req.payload.password
    }
    return dals.createUser(user);
}

exports.createVotes = async (req, res) => {

    const vote = {
        pollId: req.params.pollId,
        answer: req.payload.answer
    }
    return dals.createVote(vote);
}

exports.viewPolls = async (req, res) => {

    const params = res.params

    return dals.find(params);
}

exports.viewUsers =  async (req, res) => {

    const params = res.params

    return dals.find(params);
}

exports.viewVotes =  async (req, res) => {

    const params = res.params

    return dals.find(params);
}