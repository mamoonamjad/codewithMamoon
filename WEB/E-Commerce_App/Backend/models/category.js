const mongoose = require('mongoose')

const categoryModel = mongoose.model('categories',mongoose.Schema({
    name:String,
    description:String,
    products:[{
        type:mongoose.Types.ObjectId,
        ref:'products'
    }]
}))

module.exports = categoryModel;