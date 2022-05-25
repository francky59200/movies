const data = require('../userInfo.json')

module.exports = (req, res) => {
  if( req.body.email === data.user.email && req.body.password === data.user.password) {
    res.status(200).send(data.user.token);
    return
  }
  res.status(401).send("Invalid credentials");
};