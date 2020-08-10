const { DataTypes } = require("sequelize/types")

const tableName = 'artists'
const modelName = 'artists'

const createSchema = (DataTypes) => {
  return {
    artist_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    artist_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    biography: {
      type: DataTypes.LONGTEXT,
      allowNull: true
    },
    debut_year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    artist_link: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }
}

module.exports = {
  tableName,
  modelName,
  createSchema
}