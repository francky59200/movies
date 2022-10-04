const data = require('../../userInfo.json')

module.exports = (req, res) => {
  const queryNickname = req.query.nickname
  if (queryNickname) {
    res.status(200).send({
      nickname: queryNickname,
      isAvailable: !data.nicknameUsed.find(n => n.toLowerCase() === queryNickname.toLowerCase()),
    })
    return
  }
  res.status(400).send('Missing nickname parameter')
}
