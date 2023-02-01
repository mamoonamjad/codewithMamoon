const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    title:String,
    price:Number,
    tags:[String],
    slug:{
        type:String,
        lowercase:true,
    },
})

const prodModel = mongoose.model("firsts",productSchema);
module.exports = prodModel;