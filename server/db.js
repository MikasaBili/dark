// 创建
const mongoose = require('mongoose')
// 链接
mongoose.connect('mongodb://localhost/vueblog')
// 捕捉
const db = mongoose.connection
db.once('error', (callback) => {
  console.log('error')
})
db.once('open', (callback) => {
  console.log('success')
})
// login
const loginSchema = mongoose.Schema({
  user: String,
  password: String
})
// Models
const Models = {
  Login: mongoose.model('Login', loginSchema)
}

module.exports = Models
