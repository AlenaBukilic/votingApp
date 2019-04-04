'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');
const Inert = require('inert');
const Path = require('path');

const voteRoute = require('./routes/index');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`error not connected to the db`);
});
mongoose.connection.on('open', () => {
    console.log('Connected to the db');
});

// async function start() {

//     await server.register(Inert);

//     server.route({
//         method: 'GET',
//         path: '/{parmas*}',
//         config: {
//             auth: false
//         },
//         handler: {
//             directory: {
//                 path: 'public',
//                 index: ['index.html']
//             }
//         }
//     });
//     server.route(voteRoute);

//     try {
//         await server.start();
//     }
//     catch (err) {
//         console.log(err);
//         process.exit(1);
//     }

//     console.log(`Server running at: ${server.info.uri}`);
// }

// start();


const server = Hapi.server({
    port: process.env.PORT,
    host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return h.response({ name: 'Alena' , danger: 'Ultimate'});
    }
});

server.route({
    method: 'GET',
    path: '/index',
    handler: (request, h) => {
        return h.response('index');
    }
});

server.route({
    method: 'GET',
    path: '/about',
    handler: (request, h) => {
        request.log(["test"]);
        return h.response({ user: { name: 'Alena', email: 'alena@test.com'}});
    }
});
server.route(voteRoute);

const options = {
    includes: {
        request: ["headers", "payload"],
        response: ["payload"]
    },
    ops: {
        interval: 1000
    },
    reporters: {
        console: [{
            module: 'good-console'
        }, 'stdout']
    }
};

// const options = {
//     includes: {
//         request: ["payload"]
//     },
//     ops: {
//         interval: 1000
//     },
//     reporters: {
//         console: [{
//                 module: 'good-squeeze',
//                 name: 'Squeeze',
//                 args: [{
//                     log: '*',
//                     response: '*'
//                 }]
//             },
//             {
//                 module: 'good-console'
//             }, 'stdout'
//         ]p
//     }
// };

const init = async () => {

    await server.register({
        plugin: require('good'),
        options
    });
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);


};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
