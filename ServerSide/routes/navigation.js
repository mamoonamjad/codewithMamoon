const express = require('express');
const router = express.Router();
const categoryModel = require('.././models/category');
const productModel = require('.././models/product');

router.get('/',(req,res)=>{
    res.render('home')
})

router.get('/about', (req, res) => {
    res.render('about')
  })
  
router.get('/contact', (req, res) => {
    res.render('contact')
  })
router.get('/add-category',(req,res)=>{
  res.render('AddCategory')
})
router.get('/add-product/:id',async(req,res)=>{
  res.render('addProduct')
})
router.post('/add-product/:id',async(req,res)=>{
const category =await categoryModel.findById(req.params.id);
const product = new productModel();
product.category=category;
product.name=req.body.name;
product.price=req.body.price;
product.description=req.body.description;

await product.save();
category.products.push(product);
await category.save();
res.redirect('/');

})
module.exports= router;
