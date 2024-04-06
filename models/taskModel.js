const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    }, 
    dueDate: {
        type: Date,
        required: true
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        required: true,
        default: 'medium'
    }, 
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        required: true,
        default: 'pending'
    },
    userId: {
        type: String,
        required: true
    },
},{
    versionKey: false
}); 

const taskModel = mongoose.model('tasks', taskSchema);

module.exports = { 
    taskModel
}