const express = require('express')
const postRouter = express.Router()
const { addPost, showPosts, getPostById, likePost, dislikePost} = require('../controllers/post.controllre')

postRouter.get("/",showPosts)
postRouter.post("/upload",addPost)
postRouter.post('/like/:id', likePost)
postRouter.post('/dislike/:id', dislikePost)
postRouter.get("/:id",getPostById)



module.exports = postRouter