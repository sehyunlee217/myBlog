const express = require('express');
const router = express.Router();
const projectController = require("../controllers/projectController");

// fetch all Projects
router.route('/')
    .get(projectController.getAllProjects);

module.exports = router;
