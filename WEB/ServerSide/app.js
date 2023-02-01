var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressLayout= require('express-ejs-layouts')
var productRouter = require('./routes/API/product');
const userAuth = require('./routes/userAuth')
const userRouter = require('./routes/user')
const categoryRouter = require('./routes/API/category')
const navigation = require('./routes/navigation')
const mongoose = require('mongoose');
const session = require('express-session');
const config = require('config');

var app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayout);
app.use(session({
  secret: config.get("secretKey"),
  resave: false,
  saveUninitialized: false,
}));
app.use((req,res,next)=>{
  res.locals.user = req.session.user;
  next();
})
app.use('/api/products', productRouter);
app.use('/api/category', categoryRouter);
app.use('/auth', userAuth);
app.use('/user', userRouter);
app.use('/', navigation);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose.connect("mongodb://127.0.0.1/Project").then(() => console.log("Connected to MongoDB..."))

module.exports = app;
