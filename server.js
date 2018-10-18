'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');

const voteRoute = require('./routes/index');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URL);
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

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, h) {
        return 'Hello world!';
    }
})

server.route(voteRoute);

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
