const http = require('http')
const express = require('express')

const port = 3002
const host = 'localhost'

const app = express()

const validRoutes = () => {
  app.get('/api/v1/health', require('./api/health'))
}

validRoutes()

app.get('/', (req, res) => {
  res.send('Welcome to Music Web Api - Hello World!')
})

const server = http.createServer(app)

server.listen(port, function () {
  console.log(`Running node app on http://${host}:${port}`)
})

module.exports = app
