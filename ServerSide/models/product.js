const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    image:String,
    category:[{
        type:mongoose.Types.ObjectId,
        ref:'categories',
    }]
});

const productModel = mongoose.model('products',productSchema);
module.exports = productModel;

