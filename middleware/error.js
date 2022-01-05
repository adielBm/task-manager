const { CustomAPIError } = require("../errors/custom-error")

const errorHandler = (error, req, res, next) => {
  if (error instanceof CustomAPIError) {
    return res.status(error.statusCode).json({ msg: error.message })
  }
  return res.status(500).json({ msg: 'server error. plesse try again' })
}

module.exports = errorHandler