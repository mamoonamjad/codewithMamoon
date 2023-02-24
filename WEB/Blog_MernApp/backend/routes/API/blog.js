const express = require('express');
const router = express.Router();
const blogModel = require('../../models/blogsModel')
const userModel = require('../../models/userModel')
const commentsModel = require('../../models/commentModel')

router.get('/',async(req,res)=>{
    const blogs = await blogModel.find();
    res.send(blogs);
})

router.get('/:id',async(req,res)=>{
    const blog = await blogModel.findById(req.params.id);
    res.send(blog);
})

router.post('/add/:id',async(req,res)=>{
    const user = await userModel.findById(req.params.id)
    const blog = await blogModel.create({
        title:req.body.title,
        date:req.body.date,
        content:req.body.content,
        user,
    })
    user.blogs.push(blog)
    await user.save();
    res.send(blog)
})

router.delete('/delete/:id', async(req,res)=>{
    const blog= await blogModel.findByIdAndDelete(req.params.id)
    res.send("DELETED")
})

module.exports = router;