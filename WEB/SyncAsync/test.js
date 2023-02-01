const fs = require("fs");
console.log("Reading File")
//let data = fs.readFileSync("text.txt","utf8");

let data = fs.readFile("text.txt","utf-8",(err,data)=>
{
    console.log(`The read data is ${data}`); 
})

console.log("All READ");