var express = require('express')
var mongoose = require('mongoose')
var plm = require('passport-local-mongoose')
var router = express.Router()
mongoose.connect('mongodb://127.0.0.1:27017/register')


// Create User Login Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // bio: { type: String, required: true },
})

userSchema.plugin(plm)
//end



module.exports = mongoose.model('user', userSchema)