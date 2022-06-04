const {BadRequestError} = require('../errors');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  // check username & password
  const {username, password} = req.body;
  // mongo
  // joi
  // check in the controller

  // if username or password not exist
  if (!username || !password) {
    throw new BadRequestError('PLEASE PROVIDE EMAIL AND PASSWORD');
  }

  const id = new Date().getDate();

  // if exist create new JWT
  const token = jwt.sign({id, username}, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.status(200).json({msg: 'user created', token});
};

const dashboard = async (req, res) => {
  // send to client status
  res.status(200).json({
    msg: `Hello ${req.user.username}`,
    secret: `AUTHORIZED token : ${req.user.id}`,
  });
};

module.exports = {
  login,
  dashboard,
};
