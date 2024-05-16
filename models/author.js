'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      // define association here
    }
  }

  Author.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, // mark 'id' as the primary key
      autoIncrement: true // if it's an auto-incrementing primary key
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
