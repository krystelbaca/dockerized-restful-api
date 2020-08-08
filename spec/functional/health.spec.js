const request = require('supertest')
const app = require('../../app')

describe('Health Endpoint - Functional test', () => {
  it('should respond with a 200 status code if healthy', (done) => {
    request(app)
      .get('/api/v1/health')
      .expect(200, { status: 'ok', statusCode: 200 }, done)
  })
})
