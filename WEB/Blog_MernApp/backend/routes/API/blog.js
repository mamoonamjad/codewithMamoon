const express = require('express');
const router = express.Router();
const blogModel = require('../../models/blogsModel')

router.get('/',async(req,res)=>{
    const blogs = await blogModel.find();
    res.send(blogs);
})

router.get('/:id',async(req,res)=>{
    const blog = await blogModel.findById(req.params.id);
    res.send(blog);
})

router.post('/add',async(req,res)=>{
    const blog = new blogModel(req.body);

    await blog.save()
    res.send(blog)
})

router.delete('/delete/:id', async(req,res)=>{
    const blog= await blogModel.findByIdAndDelete(req.params.id)
    res.send("DELETED")
})

module.exports = router;