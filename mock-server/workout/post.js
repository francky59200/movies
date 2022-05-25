const data = require('../userInfo.json')

module.exports = (req, res) => {
  if( req.headers.token === data.user.token ) {

    const { 
      date = data.user.workoutDetails.date, 
      distance = data.user.workoutDetails.distance, 
      time = data.user.workoutDetails.time 
    } = req.body.workoutInfos

    res.status(200).send({
      ...data.user.workoutDetails, 
      date: date,
      distance: distance,
      time: time
    });
    return
  }
  res.status(401).send("Invalid credentials");
};