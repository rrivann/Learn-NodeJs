require('dotenv').config();
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const port = 4000;

// middleware to have data json req.body
app.use(express.json());

// middlewaware routes
app.use('/api/v1/tasks', tasks);

(async () => {
  try {
    // connect to mongodb
    await connectDB(process.env.MONGO_URI);
    // listen to port
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
})();
