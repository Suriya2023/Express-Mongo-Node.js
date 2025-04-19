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

//create router login and signup page14
// router.post('/register', function (req, res) {
//   const { username, password, bio } = req.body;
//   let userData = new userModel({
//     username: username,
//     bio: bio

//   })
//   userModel.register(userData, req.body.password).then(function (registerReducer) {
//     passport.authenticate('local')(req, res, function () {
//       res.redirect('/profile')
//     })
//   })
// })
router.post('/register', function (req, res) {
  const { username, password, bio } = req.body;
  console.log('Registering user:', { username, bio });
  let userData = new userModel({
    username: username,
    bio: bio
  });
  userModel.register(userData, password, function (err, user) {
    if (err) {
      console.error('Registration error:', err);
      return res.render('index', { error: 'There was an issue registering. Please try again.' });
    }
    passport.authenticate('local')(req, res, function () {
      res.redirect('/profile');
    });
  });
});


// create router from profile
router.get('/profile', isLoggedIn, function (req, res) {
  // res.render('profile')
  res.send("This Is Profile Page")
})

//Create Login Page
router.post("/login", passport.authenticate('local', { successRedirect: "/profile", failureRedirect: '/login' }), function (req, res) { })
router.get('/login', function (req, res) {
  res.render('Loginpage')
})
//create Middleware
function isLoggedIn(req, res, next) { if (req.isAuthenticated()) { return next() } res.redirect('/login') }

module.exports = router