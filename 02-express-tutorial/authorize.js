const authorize = (req, res, next) => {
  const {user} = req.query;
  if (user === 'rivan') {
    req.user = {name: 'rivan', id: 3};
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

module.exports = authorize;
