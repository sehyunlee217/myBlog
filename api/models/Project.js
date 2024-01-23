const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const projectSchema = new mongoose.Schema({
    title: String,
    summary: String,
    github: String,
    linkto: String,
    filePath: String,
    date: { type: Date, default: Date.now },
}, {
    timestamps: true
});

postSchema.plugin(AutoIncrement, {
    inc_field: 'post',
    id: 'projNum',
    start_seq: 1
});

module.exports = mongoose.model('Project', projectSchema);