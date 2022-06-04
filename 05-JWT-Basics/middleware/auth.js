const CustomAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');
const {UnauthenticatedError} = require('../errors');

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // authHeader with Bearer not exist
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnauthenticatedError('No token provided');
  }

  // get token not using Bearer
  const token = authHeader.split(' ')[1];

  try {
    // decode jwt token with verify
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const {id, username} = decoded;
    // init req.user with object id & username
    req.user = {id, username};
    // next func middlerware
    next();
  } catch (error) {
    throw new UnauthenticatedError('Not authorized to access this route');
  }
};

module.exports = authenticationMiddleware;
