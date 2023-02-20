const express = require('express');
const router = express.Router();
const blogModel = require('../../models/blogsModel')

router.get('/',async(req,res)=>{
    const blogs = await blogModel.find();
    res.send(blogs);
})

router.get('/:id',async(req,res)=>{
    const blog = await blogModel.findById(id);
    res.send(blog);
})

router.post('/add',async(req,res)=>{
    const blog = new blogModel();
    blog.title = req.body.title;
    blog.date = req.body.date;
    blog.content = req.body.content;

    await blog.save()
    res.send(blog)
})

router.delete(':id/delete', async(req,res)=>{
    const blog= await blogModel.findByIdAndDelete(id)
    await blog.save()

    res.send("DELETED")
})

module.exports = router;