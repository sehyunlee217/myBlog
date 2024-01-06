const asyncHandler = require('express-async-handler');
const ArtPost = require('../models/ArtPost');
const fs = require('fs');

// get all art posts

const getAllArtPosts = asyncHandler(async (req, res) => {
    const artposts = await ArtPost.find().lean().sort({ createdAt: -1 });

    // if there are no posts
    if (!artposts?.length) {
        return res.status(400).json({ message: "No art posts available" });
    }

    res.json(artposts);
});

// get single art post with id for each art post

const getSingleArtPost = asyncHandler(async (req, res) => {
    const artpost = await ArtPost.findById(req.params.id).lean();

    if (!artpost) {
        return res.status(400).json({ message: "Art post doesn't exist" });
    }

    res.json(artpost);
});

// create new art post with unique id

const createNewArtPost = asyncHandler(async (req, res) => {
    const { title, summary } = req.body;

    // confirm data 
    if (!req.body.title || !req.body.summary) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    // save image file
    let filePath = req.file.path;
    const extension = req.file.mimetype.split("/")[1];
    fs.renameSync(filePath, filePath + "." + extension);

    filePath = filePath + "." + extension;

    // create and save new post
    const newArtPost = await ArtPost.create({ title, summary, filePath });

    if (newArtPost) {
        return res.status(201).json({ message: `New post ${ newArtPost.title } created!` });
    }
    else {
        return res.status(400).json({ message: "Invalid art post data received" });
    }

});

const deleteArtPost = asyncHandler(async (req, res) => {
    // confirm artpost id
    if (!req.params.id) {
        return res.status(400).json({ message: 'No id found for art post' });
    }

    // confirm data
    const artpost = await ArtPost.findById(req.params.id).lean();

    if (!artpost) {
        return res.status(400).json({ message: 'Art post not found' });
    }

    const replyJSON = post.title;

    // delete image data from fs
    try {
        fs.unlinkSync(artpost.filePath);
    } catch (err) {
        console.log(err);
    }
    // delete post data from DB
    const result = await ArtPost.deleteOne({ _id: req.params.id });

    res.json(`Post ${ replyJSON } was deleted`);
});

module.exports = { getAllArtPosts, getSingleArtPost, createNewArtPost, deleteArtPost };