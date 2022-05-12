const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome');
  } else if (req.url === '/about') {
    res.end('here');
  } else {
    res.end(`
    <h1>Ooops !!</h1>
    <p>We</p>
    <a href="/">back </a>
    `);
  }
});

server.listen(3000);
