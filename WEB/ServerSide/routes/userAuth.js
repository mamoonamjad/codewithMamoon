const express = require("express")
const router = express.Router();
const userModel = require("../models/user"); 
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require("config")

router.post('/register',async(req,res)=>{
  if(req.body.password !== req.body.confirmPassword){
    return res.send("Invalid Password")
  }
  const register = await userModel.findOne({email:req.body.email});
  if(register){
    return res.send("Already Registered")
  }
  let user = new userModel();
  user.name= req.body.name;
  user.email = req.body.email;
  let hashpassword = await bcrypt.hash(req.body.password,12)
  let confirmpassword = await bcrypt.hash(req.body.confirmPassword,12);

  user.password = hashpassword;
  user.confirmPassword = confirmpassword;

  await user.save();
  res.redirect('/user/sign-in')
})


router.post('/login',async(req,res)=>{

  const user = await userModel.findOne({email:req.body.email});
  if(!user){
    return res.send("Not Registered")
  }
  let hashpassword = await bcrypt.compare(req.body.password,user.password);
  if(!hashpassword){
    return res.send("Password do not match")
  }
  let token = jwt.sign({_id:user._id},config.get("jwt"));
  res.cookie('token',token,{expires:new Date(Date.now()+10000000)})
  res.send(token);
})

module.exports= router;