const express = require('express')
const router = express.Router()
const categoryModel = require('../../models/category')

//To Get All Categories
router.get('/category', async(req,res)=>{
    const categories = await categoryModel.find();
    if(!categories){
        return res.status(403).send("Error Occured While Fetching")
    }
    return res.status(200).send(categories)
})

//To Get Single Category
router.get('/category/:id',async(req,res)=>{
    const category = await categoryModel.findById(req.params.id)
    if(!category){
        return res.status(403).send("Error Occured While Fetching")
    }
    return res.status(200).send(category)
})

router.post('/category/add',async(req,res)=>{
    const category = await categoryModel.create({
        name:req.body.name,
        description:req.body.description,
    })
    res.status(200).send(category)
})

router.delete('/category/:id',async(req,res)=>{
    const category = await categoryModel.findByIdAndDelete(req.params.id)
    res.send("Deleted")
})




module.exports = router