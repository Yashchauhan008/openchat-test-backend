const express = require('express');
const postRouter = express.Router();
const { addPost, showPosts, getPostById, likePost, dislikePost } = require('../controllers/post.controllre');

// Route to show all posts
postRouter.get("/", showPosts);

// Route to add a new post
postRouter.post("/upload", addPost);

// Route to get a specific post by ID
postRouter.get("/:id", getPostById);

// Route to like a post
postRouter.post("/:id/like", likePost);

// Route to dislike a post
postRouter.post("/:id/dislike", dislikePost);

module.exports = postRouter;
