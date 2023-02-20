const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title:String,
    date: {type:Date},
    content:String,
})

const blogModel = mongoose.model('blogs',blogSchema);

module.exports = blogModel;