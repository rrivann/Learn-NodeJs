const {connect} = require('mongoose');

const connectDB = async (url) => {
  return connect(url)
    .then()
    .catch((err) => console.log(err));
};

module.exports = connectDB;
