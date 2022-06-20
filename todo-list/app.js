const express = require('express');
const {Client} = require('pg');
const listRoutes = require('./routes/list');
const app = express();
const PORT = 3000;

const client = new Client({
  user: 'developer',
  host: 'localhost',
  database: 'postgres',
});

app.use(express.static('public'));
app.use('/api/v1/list', listRoutes);

(async () => {
  await client.connect();
  app.listen(PORT, () => console.log(`listen on port : ${PORT}`));
})();
