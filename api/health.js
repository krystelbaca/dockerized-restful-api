const express = require('express')
const router = express.Router()

router.get('/api/v1/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    statusCode: 200
  })
})

module.exports = router
