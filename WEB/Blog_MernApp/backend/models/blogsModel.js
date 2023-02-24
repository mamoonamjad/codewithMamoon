const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title:String,
    date: String,
    content:String,
    user:{
        type:mongoose.Types.ObjectId,
        ref:'users'
    },
    comments:[{
        type:mongoose.Types.ObjectId,
        ref:'comments'
    }]
})

const blogModel = mongoose.model('blogs',blogSchema);

module.exports = blogModel;