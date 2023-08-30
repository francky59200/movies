const data = require('../../userInfo.json')

module.exports = (req, res) => {
  if (req.headers.token === data.user.token) {
    res.status(200).send(data.user.trophies)
    return
  }
  if (req.headers.token === data.userSecond.token) {
    res.status(200).send(data.userSecond.trophies)
    return
  }
  res.status(401).send('Invalid credentials')
}
