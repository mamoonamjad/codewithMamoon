const express= require('express')
const router = express.Router()
const userModels = require('../models/user')

router.get('/sign-in',(req,res)=>{
  res.render('login')
})
router.get('/sign-up',(req,res)=>{
  res.render('signup')
})  



module.exports = router;