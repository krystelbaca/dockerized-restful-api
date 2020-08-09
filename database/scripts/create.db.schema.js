const Sequelize = require('sequelize')
const { POSTGRES } = require('../../config')

const schemaSync = async ({ dbName, user, password, dbConfig, dbSchema }) => {
  const sequelize = new Sequelize(dbName, user, password, dbConfig)

  try {
    await sequelize.query(`CREATE SCHEMA IF NOT EXISTS ${dbSchema}`)
    console.log(`The Schema: '${dbSchema}' was created successfully.`)
  } catch (err) {
    console.error(err)
  }
}

schemaSync({
  dbName: POSTGRES.DB_NAME,
  dbSchema: POSTGRES.SCHEMA,
  user: POSTGRES.USER,
  password: POSTGRES.PASSWORD,
  dbConfig: POSTGRES.DB_CONFIG
})
