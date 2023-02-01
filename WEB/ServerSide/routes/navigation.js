const express = require('express');
const router = express.Router();
const categoryModel = require('.././models/category');
const productModel = require('.././models/product');
const authenctication = require('../middlewares/authentication');
const uploads = require('../middlewares/multer');

router.get('/',(req,res)=>{
    res.render('home')
})

router.get('/about', (req, res) => {
    res.render('about')
  })
  
router.get('/contact', (req, res) => {
    res.render('contact')
  })
router.get('/add-category',authenctication,(req,res)=>{
  res.render('AddCategory')
})
router.get('/add-product/:id',async(req,res)=>{
  res.render('addProduct')
})

router.post('/add-product/:id',uploads.single('image') ,async(req,res)=>{
const category =await categoryModel.findById(req.params.id);
const url=req.protocol + '://' + req.get('host');
if(!req.file){
  return res.send("Please upload an image")
}
const product = new productModel();
product.category=category;
product.name=req.body.name;
product.price=req.body.price;
product.description=req.body.description;
product.image= url+'/images/'+req.file.filename;

await product.save();
category.products.push(product);
await category.save();
res.redirect('/');

})
router.get('/delete/:id',async(req,res)=>{
  const product = await productModel.findByIdAndDelete(req.params.id);
  res.redirect('/');
})

//to update a product
router.get('/edit/:id',async(req,res)=>
{
  res.render('edit')
  // const product = await productModel.findById(req.params.id);
  // product.name=req.body.name;
  // product.price=req.body.price;
  // product.description=req.body.description;

  // await product.save();
  // res.send(product);
})
router.post('/edit/:id', uploads.single('image') ,async(req,res)=>{
  const url=req.protocol + '://' + req.get('host');
  const product = await productModel.findById(req.params.id);
  product.name=req.body.name;
  product.price=req.body.price;
  product.description=req.body.description;
  product.image= url+'/images/'+req.file.filename;

  await product.save();
  res.redirect('/api/products');
  
})
module.exports= router;
