const express =require('express');
const userModel = require('../../models/userModel');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const upload = require('../../middlewares/multer')


router.post('/sign-up',upload.single('image'), async(req,res)=>{
    if(req.body.password !== req.body.confirmPassword){
        return res.send("Password do not match")
      }
    const registeredEmail = await userModel.findOne({email:req.body.email})
    if(registeredEmail){
        res.send("The Email Already Exists")
        return;
    }
    const url =req.protocol + '://' + req.get('host')
    let hashPassword = await bcrypt.hash(req.body.password,12)
    let confirmPassword = await bcrypt.hash(req.body.confirmPassword,12)
    if(!req.files){
        let user = await userModel.create({
            name:req.body.name,
            email:req.body.email,
            password: hashPassword,
            confirmPassword:confirmPassword,
        
        })
        res.send(user)
    }
    else if(req.files){
        let img =url + '/images/' + req.file.filename
        let user = await userModel.create({
            name:req.body.name,
            email:req.body.email,
            image:img,
            password: hashPassword,
            confirmPassword:confirmPassword,
        
        })
        res.send(user)
    }
    
})

router.post('/sign-in',async(req,res)=>{
    console.log(req.body)
    let user = await userModel.findOne({email:req.body.email});
    if(!user){
        return res.status(403).send("Please Register First")
    }
    let loginPassword = await bcrypt.compare(req.body.password,user.password);
    if(!loginPassword){
       return res.status(403).send("Passwords Do Not Match")
    }
    let token = jwt.sign({_id:user._id},config.get("jwt"));
    res.cookie('token',token,{expires:new Date(Date.now()+100000)})
    res.send(token);
})

module.exports = router; 

