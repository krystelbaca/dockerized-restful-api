const { POSTGRES: { MIGRATION_CONFIG: { schema } } } = require('../../config')
const ArtistsSchema = require('../models/artists.schema')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      ArtistsSchema.tableName, {
        artist_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        artist_name: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        biography: {
          type: Sequelize.TEXT,
          allowNull: true
        },
        debut_year: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        artist_link: {
          type: Sequelize.STRING(100),
          allowNull: true
        }
      }, { schema })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable({ tableName: ArtistsSchema.tableName, schema })
  }
}
