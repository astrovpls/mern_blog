const User = require('../models/User')

const authCtrl = {}

authCtrl.registerUser = async (req, res) => {
  const newUser = new User(req.body)
  try {
    newUser.password = await newUser.encryptPassword(newUser.password)
    await newUser.save()
    res.status(201).send({ created: true })
  } catch (error) {
    res.status(400).send({ error })
  }
}

authCtrl.loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findByCredentials(email, password)
    const token = await user.generateAuthToken()
    console.log(token)
    res.status(200).send({ token })
  } catch (error) {
    res.status(400).send({ error })
  }
}

module.exports = authCtrl
