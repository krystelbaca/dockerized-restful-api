const config = require('./index')

module.exports = {
  [config.NODE_ENV]: config.POSTGRES.MIGRATION_CONFIG
}
