const { createCustomError, CustomAPIError } = require('../errors/custom-error')
const asyncWarper = require('../middleware/async')
const Task = require('../models/Task')


const getAllTasks = asyncWarper(async (req, res) => {
  const tasks = await Task.find()
  res.status(200).json({ tasks })
})

const createTask = asyncWarper(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
})

const getTask = asyncWarper(async (req, res, next) => {
  const task = await Task.findById(req.params.id)
  if (!task) {
    return next(createCustomError(`task is not found with ${req.params.id} id`, 404))
  }
  res.status(200).json({ task })
})

const updateTask = asyncWarper(async (req, res) => {
  const { id } = req.params
  const task = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true
  })
  if (!task) {
    return next(createCustomError(`task is not found with ${req.params.id} id`, 404))
  }
  res.status(200).json({ msg: task })
})

const deleteTask = asyncWarper(async (req, res) => {
  const { id } = req.params
  const task = await Task.findByIdAndDelete(id)
  if (!task) {
    return next(createCustomError(`task is not found with ${req.params.id} id`, 404))
  }
  res.status(200).json({ task })
})

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}