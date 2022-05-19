const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const {createCustomError} = require('../errors/custom-error');

const getAll = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({tasks});
});

const createTasks = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({task});
});

const getTask = asyncWrapper(async (req, res, next) => {
  const {id: _id} = req.params;
  // property and value same _id
  const task = await Task.findOne({_id});
  if (!task) {
    return next(createCustomError(`No task with id: ${_id}`, 404));
  }
  res.status(200).json({task});
});

const updateTask = asyncWrapper(async (req, res) => {
  const {id: _id} = req.params;
  const task = await Task.findOneAndUpdate({_id}, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id: ${_id}`, 404));
  }
  res.status(200).json({task});
});

const editTask = asyncWrapper(async (req, res) => {
  const {id: _id} = req.params;
  const task = await Task.findOneAndUpdate({_id}, req.body, {
    new: true,
    runValidators: true,
    overwrite: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id: ${_id}`, 404));
  }
  res.status(200).json({task});
});

const deleteTask = asyncWrapper(async (req, res) => {
  const {id: _id} = req.params;
  const task = await Task.findOneAndDelete({_id});
  if (!task) {
    return next(createCustomError(`No task with id: ${_id}`, 404));
  }
  res.status(200).json({task});
});

module.exports = {
  getAll,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
  editTask,
};
