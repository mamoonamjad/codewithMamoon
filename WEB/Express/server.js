
const express = require("express");
const firstRouter = require("./router/first");
const mongoose = require("mongoose")
const object = express();



object.set('view engine',"ejs");
object.use(express.static('public'));

object.use("/api/welcome",firstRouter);




mongoose.connect("mongodb://127.0.0.1/Mams_DB").then(()=>
{
    console.log("Hum jur gye")
}).catch(()=>
{
    console.log("Error Occured")
})
object.listen(3000);
