const express = require('express')
const {newComment,getComment} = require('../controllers/comment.controller')
const commentRouter = express.Router()

commentRouter.post('/:postId',newComment)
commentRouter.get('/:postId',getComment)

module.exports = commentRouter