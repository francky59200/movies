const data = require('../../userInfo.json')

module.exports = (req, res) => {
  if( req.headers.token === data.user.token ) {

    const { userInfo } = req.body
    const currentInfo = {
      "name": data.user.name,
      "lastname": data.user.lastname,
      "nickname": data.user.nickname,
      "email": data.user.email,
      "city": data.user.city,
      "avatar": data.user.avatar
    }
    
    res.status(200).send({
      ...currentInfo,
      ...userInfo
    });
    return
  }
  res.status(401).send("Invalid credentials");
};