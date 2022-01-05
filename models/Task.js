const mongoose = require('mongoose')

const TaksSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'The "name" field is required.'],
    maxlength: [30, 'The "name" field can not be more than 30 characters']
  },
  completed: {
    type: Boolean,
    default: false
  },
})

module.exports = mongoose.model('Task', TaksSchema)