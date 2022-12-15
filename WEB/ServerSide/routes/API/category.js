const express = require('express');
const router = express.Router();
const categoryModel = require('../../models/category');


router.get('/display',async(req,res)=>{
    const categories = await categoryModel.find();
    res.render('showcategory',{categories})
})

router.post('/add', async(req,res)=>{
    let category = new categoryModel();
    category.name = req.body.name;
    category.description=req.body.description;
    await category.save();
    return res.redirect('/api/category/display')
})

module.exports= router;