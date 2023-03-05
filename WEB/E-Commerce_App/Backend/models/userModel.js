const mongoose = require('mongoose')

const userModel = mongoose.model('users', mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        min:5,
        max:20,
        required:true,
    },
    confirmPassword:{
        type:String,
        min:5,
        max:20,
    }

}))

module.exports = userModel;