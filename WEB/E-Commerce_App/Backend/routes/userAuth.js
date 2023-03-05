const express = require('express')
const router = express.Router()
const registerAuth = require('../middlewares/register')
const userModel = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

//Sign Up Route
router.post('/register', registerAuth , async(req,res)=>{
const hashPassword = await bcrypt.hash(req.body.password,12)
const hashConfirmPassword = await bcrypt.hash(req.body.confirmPassword,12)

const user = userModel.create({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    password:hashPassword,
    confirmPassword:hashConfirmPassword
})
res.status(200).send(user);
})


//Login Route
router.post('/login',async(req,res)=>{
    const user = await userModel.findOne({email:req.body.email})
    if(!user){
        return res.status(403).send("Please Sign Up First")
    }
    const password = await bcrypt.compare(req.body.password,user.password)
    if(!password){
        return res.status(403).send("Wrong Password!")
    }
    const token = jwt.sign({_id:user._id},config.get("jwt"))
    res.cookie('token',token,{expires:new Date(Date.now()+10000)})
    res.status(200).send(token)

})

module.exports = router;