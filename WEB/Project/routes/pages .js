const express= require('express')

const router=express.Router();

router.get('/',(req,res)=>{
    res.send("This is My Route to Home Page");
    console.log("WELCOME PAGE DISPLAYED");
})

router.get('/home',(req,res)=>
{
    res.render('Home')
    console.log("CV Displayed")
})

module.exports=router;