const express = require('express')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const blogRouter = require('./routes/API/blog');

const App = express();

//Uses of Imports
App.use(express.urlencoded({ extended: false }));
App.use(cookieParser());
App.use(express.static(path.join(__dirname, 'public')));


//Setting routes
App.use('blogs',blogRouter);

//DataBase Connection
mongoose.connect("mongodb://127.0.0.1/BlogAPP")
.then(()=>{console.log("Connected to DataBase")})
.catch(()=>{console.log("ERROR! Encountered")})

App.listen(3000);
