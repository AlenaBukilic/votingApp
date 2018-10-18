const controller = require('../controller/index');
const Joi = require('joi');

module.exports = [
    {
        method: 'POST',
        path: '/votes',
        handler: controller.create,
        options: {
            validate: {
                payload: {
                    title: Joi.string().min(3).max(30),
                    description: Joi.string().min(3).max(100)
                }
            }
        }
    }
];