const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const postSchema = new mongoose.Schema({
    title: String,
    summary: String,
    content: String,
    filePath: String,
    date: { type: Date, default: Date.now },
}, {
    timestamps: true
});

postSchema.plugin(AutoIncrement, {
    inc_field: 'post',
    id: 'postNum',
    start_seq: 1
});

module.exports = mongoose.model('Post', postSchema);