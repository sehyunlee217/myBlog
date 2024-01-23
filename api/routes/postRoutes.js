const express = require('express');
const router = express.Router();
const postController = require("../controllers/postController");

// fetch all Posts
router.route('/')
    .get(postController.getAllPosts);

// fetch single post
router.route('/:id')
    .get(postController.getSinglePost);

module.exports = router;
