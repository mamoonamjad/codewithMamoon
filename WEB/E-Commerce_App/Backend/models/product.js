const mongoose= require('mongoose')

const productModel = mongoose.model('products',mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    image:String,
    categories:[{
        type:mongoose.Types.ObjectId,
        ref:'categories'
    }]
}))
module.exports = productModel;