const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./methods-public'));

// app.get('/', (req, res) => {
//   // not use __dirname auto from path
//   res.sendFile(path.resolve('./navbar-app/index.html'));
// });

app.all('*', (req, res) => res.status(404).send('Resource Not Found'));

app.listen(4000);
