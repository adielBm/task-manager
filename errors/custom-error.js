class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}

const createCustomError = (message, code) => {
  return new CustomAPIError(message, code)
}

module.exports = { createCustomError, CustomAPIError }