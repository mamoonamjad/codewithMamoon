let express=require('express');
let UserModel=require('../Models/UserModel');
let router=express.Router();

router.get('/Register',(req,res)=>{
    res.render('Register')
})

router.post('/Register', async(req,res)=>{
    
    let checkUser= await UserModel.findOne({email:req.body.email});
    if(checkUser) return res.send('This user is already registered.');


    let user= new UserModel();
    user.name=req.body.name;
    user.password=req.body.password;
    user.email=req.body.email;
    await user.save();
    
    res.redirect('/Login');

})

router.get('/Login',(req,res)=>{
    res.render('Login');
})


router.post('/Login',async(req,res)=>{
    let user=await UserModel.findOne({email:req.body.email});
    if(!user) {
        return res.send('You dont have an account. Please Sign up first');
    }

    if(req.body.password !== user.password) return res.send('Invalid Password');

    req.session.user=user;
    res.redirect('/')
})

router.get('/Logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/');
})


module.exports=router;