const express = require('express');
const app = express();

const people = require('./routes/people');
const auth = require('./routes/auth');

// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({extended: false}));
// parse json
app.use(express.json());

// middleware people
app.use('/api/people', people);
// middleware auth
app.use(auth);

app.listen(4000);
