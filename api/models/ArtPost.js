const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const artSchema = new mongoose.Schema({
    title: String,
    summary: String,
    filePath: String,
}, {
    timestamps: true
});

artSchema.plugin(AutoIncrement, {
    inc_field: 'art',
    id: 'artNum',
    start_seq: 1
});

module.exports = mongoose.model('Art', artSchema);