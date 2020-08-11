const POSTGRES = {
  HOST: process.env.POSTGRES_HOST,
  DB_NAME: process.env.POSTGRES_DB_NAME,
  SCHEMA: process.env.POSTGRES_SCHEMA,
  PORT: process.env.POSTGRES_PORT,
  USER: process.env.POSTGRES_USER,
  PASSWORD: process.env.POSTGRES_PASSWORD,
  DIALECT: 'postgres',
  DB_CONFIG: {},
  MIGRATION_CONFIG: {}
}

Object.assign(POSTGRES.DB_CONFIG, {
  host: POSTGRES.HOST,
  port: POSTGRES.PORT,
  dialect: POSTGRES.DIALECT,
  define: {
    underscored: false,
    schema: POSTGRES.SCHEMA
  },
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

Object.assign(POSTGRES.MIGRATION_CONFIG, {
  username: POSTGRES.USER,
  password: POSTGRES.PASSWORD,
  database: POSTGRES.DB_NAME,
  host: POSTGRES.HOST,
  port: POSTGRES.PORT,
  schema: POSTGRES.SCHEMA,
  dialect: POSTGRES.DIALECT
})

module.exports = POSTGRES
