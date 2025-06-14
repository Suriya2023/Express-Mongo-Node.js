var createError = require('http-errors');
const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
 
const passport = require('passport')
const session = require('express-session');

var app = express();
 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//today
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'secret'
}))

app.use(passport.initialize());
app.use(passport.session())
passport.serializeUser(usersRouter.serializeUser())
passport.deserializeUser(usersRouter.deserializeUser())
//end

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
 
app.use(function (req, res, next) {
  next(createError(404));
});
 
app.use(function (err, req, res, next) {
  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
