const { urlencoded } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cookieParser = require('cookie-parser');
const logger = require('morgan')
const jwt = require('jsonwebtoken')
const config = require('config')
const cors = require('cors')
const session = require('express-session')
const userRouter = require('./routes/userAuth')
const categoryRouter = require('./routes/API/category')
const productRouter = require('./routes/API/product')

//creating express App
const app = express()

//Setting up the App
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')))

//Setting up Session
app.use(session({
  secret: config.get("secretKey"),
  resave: false,
  saveUninitialized: false,
}))

//Setting up the routes
app.use('/auth',userRouter);
app.use('/api',categoryRouter);
app.use('/api',productRouter)

//Connection to MongoDB
mongoose.set('strictQuery', false)
.connect("mongodb://127.0.0.1/E-Commerce")
.then(()=>{console.log("Connected")})
.catch(()=>{console.log("Error")})


//The server will run on port 2000
app.listen(2000);