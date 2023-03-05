const express = require('express')
const router = express.Router();

const categoryModel = require('../../models/category')
const productModel = require('../../models/product')
const uploads = require('../../middlewares/multer')

//To get Product
router.get('/product' , async(req,res)=>{
    const products =  await productModel.find()
    res.status(200).send(products)
})

//Single Product
router.get('/product/:id', async(req,res)=>{
    const product = await productModel.findById(req.params.id)
    res.status(200).send(product)
})

//add product
router.post('/product/add/:id',uploads.single('image'), async(req,res)=>{
    const category = await categoryModel.findById(req.params.id)
    const url=req.protocol + '://' + req.get('host');
    if(!req.file){
         return res.send("Please upload an image")
    }
    const product = await productModel.create({
      name: req.body.name,
      description: req.body.description ,
      price:req.body.price,
      image: url+'/images/'+req.file.filename,
    })
    category.products.push(product)
    await category.save()
    res.send(product)
})

//to delete product
router.delete('/delete/:id', async(req,res)=>{
    const product = await productModel.findByIdAndDelete(req.params.id)
    res.send("Deleted")
})



module.exports = router;