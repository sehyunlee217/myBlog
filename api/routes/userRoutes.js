const express = require('express');
const router = express.Router();
const usersController = require("../controllers/userController");

router.route('/register')
    .post(usersController.createNewUser);

router.route('/login')
    .get(usersController.loginUser)
    .post(usersController.getUser);

router.route('/logout')
    .post(usersController.logoutUser);

module.exports = router;
