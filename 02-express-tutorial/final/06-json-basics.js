const express = require('express');
const app = express();

const {products, people} = require('./data');

app.get('/', (req, res) => {
  res.json(products);
});

app.listen(4000);
