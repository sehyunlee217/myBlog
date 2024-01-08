const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const userController = require("../controllers/userController");
const postController = require("../controllers/postController");
const artController = require("../controllers/artController");

/* user controller that requires JWT auth */

router.route('/register') // potential update in the future for other users with Oauth
    .post(userController.createNewUser);

router.route('/login') // route to login user at Header.jsx
    .get(userController.loginUser);

router.route('/logout') // route to logout user at Header.jsx
    .post(userController.logoutUser);

/* post controller that requires JWT auth */

router.route('/create/post')
    .post(upload.single('file'), postController.createNewPost);

router.route('/post/:id')
    .put(upload.single('file'), postController.updatePost)
    .delete(postController.deletePost);

/* art post controller that requires JWT auth */

router.route('/create/art')
    .post(upload.single('file'), artController.createNewArtPost);

router.route('/arts/:id')
    .put(upload.single('file'), artController.updateArtPost)
    .delete(artController.deleteArtPost);

module.exports = router;