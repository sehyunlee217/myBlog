const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        min: 4,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: {
        type: String,
        required: true,
        default: "viewer"
    },
    Token: String
});

module.exports = mongoose.model('User', userSchema);