const models = require('../db.js')
const express = require('express')
const router = express.Router()

// create get update delete
// create
router.post('/createLogin', (req, res, next) => {
  console.log(req.body.user)
  let newUser = new models.Login({
    user: req.body.user,
    password: req.body.password
  })
  newUser.save((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send('success')
    }
  })
})
// get
router.get('/getLogin/:name', (req, res) => {
  models.Login.find((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})
module.exports = router
