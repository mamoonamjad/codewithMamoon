const mongoose  = require('mongoose');

const userModel = mongoose.model('users', mongoose.Schema({
    name: String,
    email:String,
    password:String,
    confirmPassword:String,
    image:String,
    blogs:[{
        type:mongoose.Types.ObjectId,
        ref:'blogs',
    }],
    comments:[{
        type:mongoose.Types.ObjectId,
        ref:'comments'
    }],
    role:
    {
        type:String,
        default:'user'
    }
}))

module.exports = userModel;