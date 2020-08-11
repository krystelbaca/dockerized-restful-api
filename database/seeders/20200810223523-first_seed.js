const { POSTGRES: { MIGRATION_CONFIG: { schema } } } = require('../../config')
const ArtistsSchema = require('../models/artists.schema')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert({
      tableName: ArtistsSchema.tableName,
      schema
    }, [{
      artist_name: 'Pink Floyd',
      biography: 'British progressive/psychedelic rock band formed in London in 1965. The principal members were lead guitarist Syd Barrett, bassist Roger Waters, drummer Nick Mason, keyboard player Rick Wright and guitarist David Gilmour.',
      debut_year: 1965,
      artist_link: 'http://www.pinkfloyd.com/'
    }], { schema })
  },

  down: async (queryInterface, Sequelize) => {
    return ([
      queryInterface.bulkDelete({ tableName: ArtistsSchema.tableName, schema }, null, {})
    ])
  }
}
