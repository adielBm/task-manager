const getAllTasks = (req, res) => {
  res.send('All Tasks..😀')
}

const createTask = (req, res) => {
  console.log(req)
  res.send('All Tasks..🤢')
}

const getTask = (req, res) => {
  res.send('get task')
}

const updateTask = (req, res) => {
  res.send('updateTask')
}

const deleteTask = (req, res) => {
  res.send('deleteTask')
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}