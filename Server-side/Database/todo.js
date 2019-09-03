const mongoose = require('mongoose');

let Schema = mongoose.Schema; // Create a mongoose schema
let Todo = new Schema({
    userId: { type: String },
    todo: { type: String },
    date: { type: String },
    time: { type: String },
    isCompleted: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

});

let todoList = mongoose.model('Todo', Todo);

module.exports.todoList = todoList;
