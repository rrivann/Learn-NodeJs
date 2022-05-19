require('dotenv').config();
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const port = process.env.PORT || 4000;
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

// middleware to have data json req.body
app.use(express.json());

// middleware use public folder
app.use(express.static('./public'));

// middlewaware routes
app.use('/api/v1/tasks', tasks);

// notfound handler
app.use(notFound);
// error handler
app.use(errorHandler);

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
