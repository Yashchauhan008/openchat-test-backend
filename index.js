require('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dburi = process.env.MONGO_URI
const PORT = process.env.PORT
const postRouter = require('./src/routers/post.route')
const commentRouter = require('./src/routers/comment.route')
const replyRouter = require('./src/routers/reply.route')

app.use(cors())
app.use(bodyParser.json())
app.use("/post",postRouter)
app.use("/comment",commentRouter)
app.use("/reply",replyRouter)
app.use(express.json())

app.get((req,res)=>{
    res.send("Hello World")
})



mongoose.connect(dburi)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`:::: Server is running on ${PORT}`)
        })
    })
    .catch((error)=>{
        console.log(`Error:${error}`)
    })