module.exports = {
  development: {
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
}
