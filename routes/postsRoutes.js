const {Router} = require("express");
const router = Router();

const {createPost, getAllPosts, getPost, updatePost, deletePost} = require("../controllers/postController");

// Create a new post

router.post("/", createPost);  

// Get all posts

router.get("/", getAllPosts);

// Get a single post by ID

router.get("/:id", getPost);

// Update a post by ID

router.put("/:id", updatePost);

// Delete a post by ID

router.delete("/:id", deletePost);

module.exports = router;