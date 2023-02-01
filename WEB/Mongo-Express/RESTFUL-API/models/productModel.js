const mongoose = require("mongoose");
const Joi = require("joi");

let productSchema = mongoose.Schema({
    name:{type:String,required:true},
    price:Number,
})

let productModel = mongoose.model("MongoCRUD", productSchema);


// function valdiationCheck(data){
// const schema = Joi.object({
// name: Joi.string().min(3).max(12).required(),
// price: Joi.number().min(0).required()
// });
// return schema.validate(data);
// }
 
// let func = {
//     model:productModel, validating:valdiationCheck
// }
module.exports= productModel;
