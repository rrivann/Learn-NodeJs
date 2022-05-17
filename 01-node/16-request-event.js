const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('welcome');
// });

// ! Using Event Emitter
const server = http.createServer();
server.on('request', (req, res) => {
  res.end('welcome');
});

server.listen(4000);
