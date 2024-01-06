const express = require('express');
const router = express.Router();
const artController = require('../controllers/artController');

/* Open routes to get all / get one art post*/

router.route('/')
    .get(artController.getAllArtPosts);

// fetch single artwork 
router.route('/:id')
    .get(artController.getSingleArtPost);

module.exports = router;
