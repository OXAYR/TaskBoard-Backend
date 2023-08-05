const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    id: Number,
    todo: String
})

module.exports = mongoose.model('Todo', todoSchema)