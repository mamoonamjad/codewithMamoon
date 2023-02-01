const mongoose =require("mongoose");


const prodModel = require("../models/product_model");
const productCreation = async (title,price,tags)=>
{
console.log("Product Created")
let product = new prodModel();
product.title= title;
product.price= price;
product.tags= tags;
await product.save();
return product;
};

const prodShow= async()=>{
    let product = await  prodModel.find();
    return product;
}
const prodDelete=async(_id)=>{
    let product = await prodModel.findByIdAndDelete(_id);
    return product
}
const prodUpdate = async (_id,title,price,tags)=>
{
console.log("Product Updating")
let product = await prodModel.findById(_id)
product.title= {title , require:true};
product.price= price;
product.tags= tags;
await product.save();
return product;
};

const funcs = {create:productCreation,show:prodShow, deleted:prodDelete, update:prodUpdate};
module.exports =funcs;
