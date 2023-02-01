const express = require('express');
let mongoose = require("mongoose")
let router =express.Router();
let productModel = require("../../models/productModel")
let validate = require("../../middleware/product")
let auth = require('../../middleware/auth')

//get request from mongo
router.get("/", auth,  async (req,res)=>
{
    const token = req.cookies.token;
    let models = await productModel.find();
    return res.send(models);
})

//get single data
router.get("/:id",async(req,res)=>
{
    try{
        let model = await productModel.findById(req.params.id)
        return res.send(model);
    }
    catch(err){
        return res.status(400).send("invalid ID")
    }

})

//post a record
router.post("/",async (req,res)=>
{
    let model = new productModel();
    model.name= req.body.name;
    model.price= req.body.price;
    await model.save();
    return res.send(model);
})

//updation
router.put("/:id", async(req,res)=>
{
    let model = await productModel.findById(req.params.id);
    model.name=req.body.name;
    model.price=req.body.price;

    model.save();
    return res.send(model)
})

//deletion
router.delete("/:id", async(req,res)=>
{
    let model = await productModel.findByIdAndDelete(req.params.id)
    res.send(model); 
})
module.exports=router;
