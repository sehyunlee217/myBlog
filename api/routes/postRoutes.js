const express = require('express');
const router = express.Router();
const postController = require("../controllers/postController");
const verifyJWT = require("../middleware/verifyJWT");

router.use(verifyJWT); // verify JWT token to update post

router.route('/')
    .get(postController.getAllPosts)
    .post(postController.createNewPost);

router.route('/:id')
    .get(postController.getSinglePost);

router.route('/:id/edit')
    .put(postController.updatePost)
    .delete(postController.deletePost);



module.exports = router;
