const dals = require('../dals/index');

exports.createVote = async (params) => {

    const vote = await dals.createVote(params);

    try {
        await dals.insertVote(vote);
    }
    catch (err) {

        console.log(err);

        // throw new Boom/
    }

    return vote;
}