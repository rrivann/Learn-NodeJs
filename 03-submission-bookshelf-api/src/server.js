const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
  routes: {
    cors: {
      origin: ['*'],
    },
  },
});

const init = async () => {
  server.route(routes);
  await server.start();
};

init();
