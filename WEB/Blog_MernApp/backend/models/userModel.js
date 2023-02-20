const mongoose  = require('mongoose');

const userModel = mongoose.model('users', mongoose.Schema({
    name: String,
    email:String,
    password:String,
    confirmPassword:String,
}))

module.exports = userModel;