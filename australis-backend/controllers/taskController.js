const asyncHandler = require('express-async-handler');
const Task = require('../models/Task');

const createTask = asyncHandler(async (req, res) => {
  const { title, comments } = req.body;
  if (!title) {
    res.status(400);
    throw new Error('Title is mandatory!');
  }

  const taskInput = comments
    ? { userId: req.user.id, title, comments }
    : { userId: req.user.id, title };
  const task = await Task.create(taskInput);

  res.status(201).json({ message: 'task created', task });
});

const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(404);
    throw new Error('Task not found');
  }

  if (task.userId.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to delete other user's task");
  }

  await task.deleteOne({ _id: req.params.id });

  res.status(200).json({ message: 'task deleted', task });
});

const getTasks = asyncHandler(async (req, res) => {
  /* this will be fetched by createdDate (yet to be implemented) and user Id */
  const task = await Task.find({
    // createdAt: req.params.date, this field will be removed
    userId: req.user.id,
  });

  res.status(200).json({ message: 'tasks fetched by createdDate', task });
});

const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    return res.status(404).json({ message: 'task not found' });
  }

  if (task.userId.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other user's task");
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({ message: 'task updated', task: updatedTask });
});

module.exports = { createTask, getTasks, deleteTask, updateTask };
