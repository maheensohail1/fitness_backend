const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    uid: {
        type: String
    },
    session_title: {
        type: String
    },
    todo_responsible: {
        type: String
    },
    todo_priority: {
        type: String
    },
    images: {
        type: Array,
        default: []
    },
    links: {
        type: Array,
        default: []
    },
    todo_completed: {
        type: Boolean
    }
    
});

module.exports = mongoose.model('Todo', Todo);