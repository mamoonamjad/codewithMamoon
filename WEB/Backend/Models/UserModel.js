let mongoose=require('mongoose');

let UserSchema=mongoose.Schema({
    name:String,
    password:String,
    email:String,
    role:{
        type:String,
        default:'user'
    }
})

let UserModel=mongoose.model('users',UserSchema);

module.exports=UserModel;