const express = require('express')
const app = express()

const guessRoute = require('./routes/guess')

// Import API Routes
app.use(guessRoute)


// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
