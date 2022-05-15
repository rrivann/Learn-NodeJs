const express = require('express');
const authorize = require('./authorize');
const logger = require('./logger');
const app = express();

// req => middleware => res
// 1. use vs route
// 2. options - our own / express / third party

// app.use([logger, authorize]);
app.use(express.static('./methods-public'));

app.get('/', (req, res) => {
  res.send('home');
});

app.get('/about', (req, res) => {
  res.send('about');
});

app.get('/api/products', (req, res) => {
  res.send('products');
});

app.get('/api/items', [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send('items');
});

app.listen(4000);
