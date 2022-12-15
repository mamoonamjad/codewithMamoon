var express = require('express');
var router = express.Router();
const productModel = require('../../models/product');
//to get Products
router.get('/', async(req, res, next) =>
{
   const products = await productModel.find();
    res.send(products);
});

//to get a single product
router.get('/:id', async(req, res, next) =>
{
  const product = await productModel.findById(req.params.id);
  res.send(product);

})

//to add a product
router.post('/',async(req,res)=>
{
  let product = new productModel();
  product.name=req.body.name;
  product.price=req.body.price;
  product.description=req.body.description;
  //product.category.name=req.body.name;
  await product.save();
  res.send(product);
})

//to update a product
router.put('/:id',async(req,res)=>
{
  const product = await productModel.findById(req.params.id);
  product.name=req.body.name;
  product.price=req.body.price;
  product.description=req.body.description;
  //product.category.name=req.body.name;

  await product.save();
  res.send(product);
})

router.delete('/:id',async(req,res)=>{
  const product = await productModel.findByIdAndDelete(req.params.id);
  res.send("DELETED PRODUCT SUCCESSFULLY");
})



module.exports = router;
