const express = require("express")
const  router = express.Router();

router.get("/",(req,res)=>
{
    console.log("Displaying Welcome Page");
    res.render('welcome');
})

router.get("/home",(req,res)=>{
    res.render('home')
}
)
router.post("/product",(req,res)=>
{
    res.send("HELLO JEE");
})

module.exports = router;