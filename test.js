const Hapi = require('hapi');

const server = Hapi.server({
    port: process.env.PORT,
    host: 'localhost'
});

const options = {
    ops: {
        interval: 1000
    },
    reporters: {
        myConsoleReporter: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ log: '*', response: '*' }]
        }, {
            module: 'good-console'
        }, 'stdout'],
        myFileReporter: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ ops: '*' }]
        }, {
            module: 'good-squeeze',
            name: 'SafeJson'
        }, {
            module: 'good-file',
            args: ['./test/fixtures/awesome_log']
        }],
        myHTTPReporter: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ error: '*' }]
        }, {
            module: 'good-http',
            args: ['http://prod.logs:3000', {
                wreck: {
                    headers: { 'x-api-key': 12345 }
                }
            }]
        }]
    }
};

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