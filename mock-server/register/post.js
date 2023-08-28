const data = require('../userInfo.json')

module.exports = (req, res) => {
  if (req.body.email === data.userRegister.email && req.body.name === data.userRegister.name && req.body.password === data.userRegister.password) {
    res.status(200).send(data.userRegister.token)
    return
  }
  return res.status(401).send('invalid credentials')
}
