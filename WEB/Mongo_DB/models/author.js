const mongoose = require("mongoose");

const authModel= mongoose.model("second",new 
mongoose.Schema({
    name: String,
    bio:String,
    website:String,

}))

module.exports= authModel;