const Project = require('../models/Project');
const asyncHandler = require('express-async-handler');
const fs = require('fs');

const createProject = asyncHandler(async (req, res) => {
    const { title, summary, github, linkto, file } = req.body;

    // confirm data 
    if (!req.body.title || !req.body.summary || !req.body.github || !req.body.linkto || !req.body.file) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    // save image file
    let filePath = req.file.path;
    const extension = req.file.mimetype.split("/")[1];
    fs.renameSync(filePath, filePath + "." + extension);

    filePath = filePath + "." + extension;

    // create and save new post
    const newProject = await Post.create({ title, summary, github, linkto, filePath });

    if (newProject) {
        return res.status(201).json({ message: "New Project created!" });
    }
    else {
        return res.status(400).json({ message: "Invalid project data received" });
    }
});


const getAllProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find().lean().sort({ createdAt: -1 });

    // if there are no posts
    if (!projects?.length) {
        return res.status(400).json({ message: "No projects available" });
    }

    res.json(projects);
});

const getSingleProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id).lean();

    if (!project) {
        return res.status(400).json({ message: "Project doesn't exist" });
    }

    res.json(project);
});

module.exports = { createProject, getAllProjects, getSingleProject };