const mongoose = require('mongoose');
const express = require('express');
const { auth } = require('../middleware/authMiddleware');
const { taskModel } = require('../models/taskModel');
require('dotenv').config();


const taskRouter = express.Router();




taskRouter.get("/", auth, async (req, res) => {
    try {
        const { userId } = req.body;
        const userTask = await taskModel.find({userId}) ;
        res.status(200).json({tasks: userTask});
    } catch (err) {
        res.status(500).json({msg: "Internal server error", err});
    }
})



taskRouter.get("/:id", auth, async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const userTask = await taskModel.findOne({_id: id, userId}); ;
        res.status(200).json({tasks: userTask});
    } catch (err) {
        res.status(500).json({msg: "Internal server error", err});
    }
})



taskRouter.post("/add", auth, async (req, res) => {
    try {
        const { title, description, dueDate, priority, status, userId } = req.body;
        const newTask = new taskModel({ title, description, dueDate, priority, status, userId });
        await newTask.save();
        res.status(200).json({msg: "Task added successfully!", newTask});
    } catch (err) {
        res.status(500).json({msg: "Internal server error", err});
    }
})



taskRouter.patch("/update/:id", auth, async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, dueDate, priority, status } = req.body;
        const updatedTask = await taskModel.findByIdAndUpdate({_id: id}, { title, description, dueDate, priority, status });
        res.status(200).json({msg: "Task updated successfully", updatedTask});
    } catch (err) {
        res.status(500).json({msg: "Internal server error", err});
    }
})



taskRouter.delete("/delete/:id", auth, async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await taskModel.findByIdAndDelete({_id: id});
        res.status(200).json({msg: "Task deleted successfully", deletedTask});
    } catch (err) {
        res.status(500).json({msg: "Internal server error", err});
    }
})




module.exports = {
    taskRouter
}