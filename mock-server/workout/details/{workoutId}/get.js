const data = require('../../../userInfo.json')

module.exports = (req, res) => {
  if (req.headers.token === data.user.token) {
    res.status(200).send({
      ...data.user.workoutDetails,
      id: req.params.workoutId,
    })
    return
  }
  res.status(401).send('Invalid credentials')
}
