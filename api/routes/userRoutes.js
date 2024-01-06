const express = require('express');
const router = express.Router();
const usersController = require("../controllers/userController");
const verifyJWT = require('../middleware/verifyJWT');

router.route('/login')
    // .get(usersController.loginUser)
    .post(usersController.getUser); // used for login user

module.exports = router;
