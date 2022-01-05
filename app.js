const express = require('express')
const connectDB = require('./db/connect')
const errorHandler = require('./middleware/error')
const router = require('./routes/tasks')
require('dotenv').config()

const app = express()

app.use(express.json())

app.use('/api/v1/tasks', router)

app.use(errorHandler)

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}... `))
  } catch (error) {
    console.log(error);

  }
}

start();