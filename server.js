'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');
const Inert = require('inert');

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

const server = Hapi.server({
    port: 5000,
    host: 'localhost'
});

async function start() {

    await server.register(Inert);

    server.route({
        method: 'GET',
        path: '/{parmas*}',
        config: {
            auth: false
        },
        handler: {
            directory: {
                path: 'public',
                index: ['index.html']
            }
        }
    });
    server.route(voteRoute);

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log(`Server running at: ${server.info.uri}`);
}

start();
