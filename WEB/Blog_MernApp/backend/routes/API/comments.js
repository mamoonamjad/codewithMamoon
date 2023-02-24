const express =require('express')
const router = express.Router()
const commentModel  = require('../../models/commentModel')
const userModel = require('../../models/userModel')
const blogsModel = require('../../models/blogsModel')

router.post('/:userId/:blogId', async(req,res)=>{
    const user = await userModel.findById(req.params.userId);
    const blog = await blogsModel.findById(req.params.blogId);

    const comment = await commentModel.create({
        comment:req.body.comment,
        user,
        blog,
    })
    user.comments.push(comment)
    blog.comments.push(comment)

    await user.save();
    await blog.save();
    res.send("Commented Successfully")
})
module.exports = router