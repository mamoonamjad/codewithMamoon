const express = require('express')
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const blogRouter = require('./routes/API/blog');
const userRouter  = require('./routes/API/user')
const commentRouter = require('./routes/API/comments')
const App = express();
const config = require('config')
const jwt = require('jsonwebtoken')
const cors = require('cors')


//Uses of Imports
App.use(express.json());
App.use(cors())
App.use(express.urlencoded({ extended: false }));
App.use(cookieParser());
App.use(express.static(path.join(__dirname, 'public')));

//Session Based Secret
App.use(session({
    secret: config.get("secretKey"),
    resave: false,
    saveUninitialized: false,
  }));
  
//Setting routes
App.use("/api/blogs",blogRouter);
App.use("/api/auth",userRouter);
App.use("/api/comments",commentRouter)

//DataBase Connection
mongoose.set('strictQuery',false).connect("mongodb://127.0.0.1/BlogAPP")
.then(()=>{console.log("Connected to DataBase")})
.catch(()=>{console.log("ERROR! Encountered")})

App.listen(4000)

