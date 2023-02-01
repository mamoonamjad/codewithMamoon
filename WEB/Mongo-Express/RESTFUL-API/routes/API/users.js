const express= require("express");
const mongoose = require("mongoose");
let router = express.Router();
let userModel = require('../../models/user')
let config = require("config")
let bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { date } = require("joi");



router.get('/',async(req,res)=>
{
    let users= await userModel.find();
    return res.send(users);
})

router.post('/register',async(req,res)=>
{
    let userCheck= await userModel.findOne({email:req.body.email})
    if(userCheck){
        return res.status(250).send("User is already Registred")
    }
    let user = new userModel();
    user.name = req.body.name;
    user.email = req.body.email;
    let hashpassword = await bcrypt.hash(req.body.password,12);
    user.password = hashpassword;

    await user.save();
    return res.send(user)

})
router.post('/sign-in',async(req,res)=>
{
    let user= await userModel.findOne({email:req.body.email})
    if(!user){
        return res.status(250).send("Please First Register")
    }
    let hashpassword = await bcrypt.compare(req.body.password,user.password);
    if(!hashpassword) return res.status(400).send("Invalid");
    let token =jwt.sign({_id:user._id,name:user.name},config.get("jwtPrivateKey"))
    res.cookie('token',token,{expires:new Date(Date.now()+20000)})
})
module.exports=router;