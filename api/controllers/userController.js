const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    // confirm data
    if (!username || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // get user data
    const foundUser = await User.findOne({ username: username }).exec();

    if (!foundUser) {
        return res.status(401).json({ message: "User not found" });
    }

    const isValid = bcrypt.compareSync(password, foundUser.password);

    if (isValid) {
        const token = jwt.sign(
            {
                "userInfo": {
                    "username": foundUser.username,
                    "roles": foundUser.roles
                }
            },
            process.env.TOKEN_SECRET,
        );

        res.cookie('jwt', token, { httpOnly: true }).json(foundUser.username);
    }
    else {
        res.sendStatus(401);
    }


});

const createNewUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    // confirm data
    if (!username || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // check for duplicates
    const duplicate = await User.findOne({ username }).lean().exec();

    if (duplicate) {
        return res.status(409).json({ message: "Duplicate username" });
    }

    // hash and salt password
    const hashedPwd = await bcrypt.hash(password, 10);

    const userObj = { username, "password": hashedPwd };

    // Create and store new user 
    const user = await User.create(userObj);

    // success response
    if (user) {
        res.status(201).json({ message: `New user ${ username } created.` });
    }
    else {
        res.status(400).json({ message: "invalid user data received at server" });
    }

});

const loginUser = asyncHandler(async (req, res) => {
    const cookies = req.cookies;

    jwt.verify(cookies.jwt,
        process.env.TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.status(403); // invalid token
            res.json(decoded.userInfo.username);
        });

});

const logoutUser = asyncHandler(async (req, res) => {
    const cookies = req.cookies;

    // verify cookies with JWT
    if (!cookies?.jwt) return res.sendStatus(204);

    if (cookies) {
        res.clearCookie('jwt', { httpOnly: true });
        res.sendStatus(200);
    }

});

module.exports = { getUser, createNewUser, loginUser, logoutUser };