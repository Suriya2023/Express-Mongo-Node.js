let express = require('express')
const passport = require('passport')
let router = express.Router()
let userModel = require('./users')
const localStrategy = require('passport-local')
const app = require('../app')
passport.use(new localStrategy(userModel.authenticate()))

router.get('/', function (req, res) {
  res.render('index')
})

router.post('/register', function (req, res) {
  const { username, password, bio } = req.body;
  let userData = new userModel({
    username: username,
    bio: bio

  })
  userModel.register(userData, req.body.password).then(function (registerReducer) {
    passport.authenticate('local')(req, res, function () {
      res.redirect('/profile')
    })
  })
})
router.get('/profile', isLoggedIn, function (req, res) {
  res.send("This Is Profile Page")
})
router.post("/login", passport.authenticate('local', { successRedirect: "/profile", failureRedirect: '/login' }), function (req, res) { })
router.get('/login', function (req, res) {
  res.render('Loginpage')
})

function isLoggedIn(req, res, next) { if (req.isAuthenticated()) { return next() } res.redirect('/login') }

module.exports = router