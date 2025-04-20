var express = require('express')
var mongoose = require('mongoose')
var plm = require('passport-local-mongoose')
var router = express.Router()
mongoose.connect('mongodb://127.0.0.1:27017/register')


router.get('/', function (req, res) {
  res.send("This is index page")
})

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String },
  bio: { type: String }
})

userSchema.plugin(plm)



module.exports = mongoose.model('user', userSchema)