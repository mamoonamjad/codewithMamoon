const userModel = require('../models/userModel')
const mongoose = require('mongoose')
const express = require('express')


const register = async(req,res,next)=>{
    const alreadyRegistred = await userModel.findOne({email:req.body.email})
    if(alreadyRegistred){
        return res.send("Already Registered")
    }
    if(req.body.password != req.body.confirmPassword)
    {
        return res.send("Passwords do not match")
    }
    else{
        next();
    }
  
}
module.exports = register;

