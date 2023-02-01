let express=require('express');

let UserModel=require('../../Models/UserModel');


let router=express.Router();


router.get('/',async(req,res)=>{
   let users=await UserModel.find();
   res.send(users);
})

router.get('/:id',async(req,res)=>{
    let user=await UserModel.findById(req.params.id);
    res.send(user);
})

router.delete('/:id',async (req,res)=>{
    let user=await UserModel.findByIdAndDelete(req.params.id);
    res.send(user);
})

module.exports=router;