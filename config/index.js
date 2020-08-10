const config = {
  NODE_ENV: process.env.NODE_ENV,
  SERVER: {
    NAME: process.env.SERVER_NAME,
    PORT: process.env.SERVER_PORT,
    HOST: process.env.SERVER_HOST,
    API_ROUTE: {
      V1: '/api/v1'
    }
  },
  POSTGRES: require('../database/config/postgres.config')
}

module.exports = config
