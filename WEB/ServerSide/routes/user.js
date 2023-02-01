const express= require('express')
const router = express.Router()
const userModels = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

router.get('/sign-in',(req,res)=>{
  res.render('login')
})
router.get('/sign-up',(req,res)=>{
  res.render('signup')
})  

router.post('/login',async(req,res)=>{
  const user = await userModels.findOne({email:req.body.email});
  if(!user){
    return res.redirect('/user/sign-in');
  }
  let hashpassword = await bcrypt.compare(req.body.password,user.password);
  if(!hashpassword){
    return res.send("Password do not match")
  }
  let token = jwt.sign({_id:user._id},config.get("jwt"));
  req.session.user = user;
  res.redirect('/');
})
router.get('/sign-out',(req,res)=>{
  req.session.destroy();
  res.redirect('/user/sign-in');})

module.exports = router;