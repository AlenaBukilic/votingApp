const controller = require('../controller/index');
const Joi = require('joi');

module.exports = [
    {
        method: 'POST',
        path: '/api/users',
        handler: controller.createUsers,
        options: {
            validate: {
                payload: {
                    email: Joi.string().email({ minDomainAtoms: 2 }).required(),
                    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/api/{userId}/polls',
        handler: controller.createPolls,
        options: {
            validate: {
                payload: {
                    question: Joi.string().required(),
                    answers: Joi.array().required().default([])
                },
                params: {
                    userId: Joi.string().required()
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/api/{userId}/polls/{pollId}/votes',
        handler: controller.createVotes,
        options: {
            validate: {
                payload: {
                    answer: Joi.string().required().min(1)
                },
                params: {
                    pollId: Joi.string().required(),
                    userId: Joi.string().required()
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/api/polls',
        handler: controller.viewPolls
    },
    {
        method: 'GET',
        path: '/api/polls/{id}',
        handler: controller.viewPoll,
        options: {
            validate: {
                params: {
                    id: Joi.string().min(24).max(24)
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/api/users/{id}',
        handler: controller.viewUsers,
        options: {
            validate: {
                params: {
                    id: Joi.string().min(24).max(24)
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/api/votes/{id}',
        handler: controller.viewVotes,
        options: {
            validate: {
                params: {
                    id: Joi.string().min(24).max(24)
                }
            }
        }
    },
];