const Post = require('../models/Post');
const asyncHandler = require('express-async-handler');
const fs = require('fs');

const getAllPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find().lean().sort({ createdAt: -1 });

    // if there are no posts
    if (!posts?.length) {
        return res.status(400).json({ message: "No posts available" });
    }

    res.json(posts);
});

const getSinglePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id).lean();

    if (!post) {
        return res.status(400).json({ message: "Post doesn't exist" });
    }

    res.json(post);
});

const createNewPost = asyncHandler(async (req, res) => {

    const { title, summary, content } = req.body;

    console.log("Post Create request");

    // confirm data 
    if (!req.body.title || !req.body.summary || !req.body.content) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    // save image file
    let filePath = req.file.path;
    const extension = req.file.mimetype.split("/")[1];
    fs.renameSync(filePath, filePath + "." + extension);

    filePath = filePath + "." + extension;

    // create and save new post
    const newPost = await Post.create({ title, summary, content, filePath });

    if (newPost) {
        return res.status(201).json({ message: "New post created!" });
    }
    else {
        return res.status(400).json({ message: "Invalid Post data received" });
    }

});

const updatePost = asyncHandler(async (req, res) => {
    const { title, summary, content } = req.body;

    // confirm data 
    if (!req.body.title || !req.body.summary || !req.body.content) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    const post = await Post.findById(req.params.id).lean();

    if (!post) {
        return res.status(400).json({ message: 'Post not found' });
    }

    const filter = { _id: req.params.id };
    const update = { title, summary, content };

    const newPost = await Post.findOneAndUpdate(filter, update);

    res.status(200).json({ message: 'Post updated' });
});

const deletePost = asyncHandler(async (req, res) => {
    // confirm id 
    if (!req.params.id) {
        return res.status(400).json({ message: 'No id found for post' });
    }

    // confirm data
    const post = await Post.findById(req.params.id).lean();

    if (!post) {
        return res.status(400).json({ message: 'Post not found' });
    }

    const replyJSON = post.title;

    // delete image data from fs
    try {
        fs.unlinkSync(post.filePath);
    } catch (err) {
        console.log(err);
    }
    // delete post data from DB
    const result = await Post.deleteOne({ _id: req.params.id });

    res.json(`Post ${ replyJSON } was deleted`);
});

module.exports = { getAllPosts, createNewPost, updatePost, deletePost, getSinglePost };