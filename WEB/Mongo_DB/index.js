const express= require("express");
const app = express();
const mongoose= require("mongoose")
const {create,show,deleted,update} = require('./ModelHandlers/prodOperations')
const authaddition = require('./ModelHandlers/authOperations')

mongoose.connect("mongodb://127.0.0.1/Mams_DB").then(async()=>
{
    console.log("I'm Connected");
    let auth= await authaddition("Mamoon","Very Good","www.mamoon.com");
    console.log(auth);
    console.log("Added")
        // let product= await create("APPLE", 5000, ["White","ALL_OK"]);
    // console.log(product)
    // let product = await show();
    // console.log(product)
   // console.log( await deleted('6380d301e7ac9e6b4a672e7e'));
//    let product = await update('6380cee1dc1c2eb17feb828a',"Hello",4200,[])
//    console.log(product)

}).catch(err=>{
    console.log("You've Done Something Wrong")
})