const mongoose=require("mongoose");

const userSchema= mongoose.Schema(
    {
        name:{type:String, min:3},
        email:
        {       
            type: String,
            lowercase: true,
            unique: true,
            required: true,
        },
        password:{type:String,required:true}
    }
)
const userModel = mongoose.model("users",userSchema);

module.exports = userModel;
