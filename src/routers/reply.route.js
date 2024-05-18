const express = require('express')
const replyRouter = express.Router()
const { addReply, getReply } = require('../controllers/reply.controller')

replyRouter.post("/:commentId",addReply)
replyRouter.get("/:commentId",getReply)

module.exports = replyRouter