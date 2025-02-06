const {Router} = require("express");
const router = Router();

const {createPost, getAllPosts, getPost, updatePost, deletePost} = require("../controllers/postController");

// Create a new post

router.post("/posts", createPost);  

// Get all posts

router.get("/posts", getAllPosts);

// Get a single post by ID

router.get("/posts/:id", getPost);

// Update a post by ID

router.put("/posts/:id", updatePost);

// Delete a post by ID

router.delete("/posts/:id", deletePost);

module.exports = router;