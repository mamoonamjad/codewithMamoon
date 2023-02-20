const express =require('express');
const userModel = require('../../models/userModel');
const router = express.Router();
const bcrypt = require('bcryptjs')

router.post('/sign-up', async(req,res)=>{
    if(req.body.password !== req.body.confirmPassword){
        return res.send("Password do not match")
      }
    const registeredEmail = await userModel.findOne({email:req.body.email})
    if(registeredEmail){
        res.send("The Email Already Exists")
    }
    let user = new userModel();
    user.name = req.body.name;
    user.email = req.body.email;

    let hashPassword = bcrypt.hash(req.body.password,12)
    let confirmPassword = bcrypt.hash(req.body.confirmPassword,12)

    user.password = hashPassword;
    user.confirmPassword = confirmPassword;

    await user.save();
    res.send(user)
    
})

router.post('/sign-in',async(req,res)=>{
    let user = await userModel.findOne({email:req.body.email});
    if(!user){
        res.send("Please Register First")
    }
    let loginPassword = bcrypt.compare(req.body.password,user.password);
    if(!loginPassword){
        res.send("Passwords Do Not Match")
    }
    let token = jwt.sign({_id:user._id},config.get("jwt"));
    res.cookie('token',token,{expires:new Date(Date.now()+100000)})
    res.send(token);
})

module.exports = router; 

