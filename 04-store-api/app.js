require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

// middleware
const notFoundMiddleware = require('./middleware/not-found-handler');
const errorMiddleware = require('./middleware/error-handler');
const productsRouter = require('./routes/products');
const connectDB = require('./db/connect');

app.use(express.json());
app.use('/api/v1/products', productsRouter);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT || 4000;

(async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`server listening port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
})();
