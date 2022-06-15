const mongoose = require('mongoose');
module.exports = (url) =>
  mongoose.connect(url).catch((error) => console.log(error));
