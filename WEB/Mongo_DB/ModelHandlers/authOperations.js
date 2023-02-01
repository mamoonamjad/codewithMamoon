const mongoose = require("mongoose")
const authModel= require('../models/author')

const authaddition = async (name,bio,website)=>
{
console.log("Auth added")
let author =new authModel();
author.name=name;
author.bio=bio;
author.website=website;
await author.save();
return author;
};

module.exports=authaddition;