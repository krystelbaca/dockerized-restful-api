const ArtistsSchema = require('./artists.schema')

module.exports = (sequelize, DataTypes) => {
  const Artists = sequelize.define(
    ArtistsSchema.modelName,
    ArtistsSchema.createSchema(DataTypes)
  )

  return Artists
}
