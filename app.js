const express = require('express')
const router = require('./routes/tasks')
const app = express()

const port = 5000

app.use(express.json())

app.use('/api/v1/tasks', router)

app.listen(port, console.log(`Server is listening on port ${port}... `))