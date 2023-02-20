const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title:String,
    date: String,
    content:String,
    user:[{
        type:mongoose.Types.ObjectId,
        ref:'user'
    }]
})

const blogModel = mongoose.model('blogs',blogSchema);

module.exports = blogModel;