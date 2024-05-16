'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      // Define association here
      this.hasMany(models.Article, {
        foreignKey: 'author_id'
      })
    }
  }

  Author.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Mark 'id' as the primary key
      autoIncrement: true // If it's an auto-incrementing primary key
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Author',
  });

  return Author;
};
