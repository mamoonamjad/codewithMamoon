const mongoose = require("mongoose");

const commentsModel = mongoose.model('comments',mongoose.Schema({
    comment:String,
    user:{
        type:mongoose.Types.ObjectId,
        ref:'users',
    },
    blog:[{
        type:mongoose.Types.ObjectId,
        ref:'blogs'
    }]
}))

module.exports = commentsModel;

