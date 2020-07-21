'use strict'

const express = require('express')

const port = 3002
const host = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
  res.send('Hello cats')
})

app.listen(port, host)
console.log(`Running node app on http://${host}:${port}`)
