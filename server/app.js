const express = require('express')
// const path = require('path')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
// app.use('/', (req, res) => {
//   res.send('Hello')
// })
routes(app)
app.listen(3000, () => {
  console.log('app listening on port 3000')
})
