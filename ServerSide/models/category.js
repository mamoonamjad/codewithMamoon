const mongoose = require('mongoose');

const categorySchema= mongoose.Schema({
    name:String,
    description:{type:String,required:[true,"Description is Required"]},
    products:[{
        type:mongoose.Types.ObjectId,
        ref:'products'
    }]
})

const categoryModel = mongoose.model('categories',categorySchema);
module.exports = categoryModel;