const data = require('../../../userInfo.json')

module.exports = (req, res) => {
  if( req.headers.token === data.user.token ) {
    const { workouts } = data.user
    const { year, month } = req.params

    const updatedWorkouts = workouts.map(w => w.replace("/2022", `/${year}`).replace("/04/", `/${month}/`))

    res.status(200).send(updatedWorkouts);
    return
  }
  res.status(401).send("Invalid credentials");
};