const mongoose  = require('mongoose');

const userModel = mongoose.model('users', mongoose.Schema({
    name: String,
    email:String,
    password:String,
    confirmPassword:String,
    blog:[{
        type:mongoose.Types.ObjectId,
        ref:'blogs',
    }]
}))

module.exports = userModel;