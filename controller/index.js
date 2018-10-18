const dals = require('../dals/index');

exports.create =  (req, res) => {

    console.log(req.payload);
    const vote = {
        title: req.payload.title,
        description: req.payload.description
    }
    return dals.create(vote);
}