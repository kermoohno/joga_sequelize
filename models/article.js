'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Article extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  Article.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    published: {
      type: DataTypes.DATE,
      allowNull: false
    },
    author_id: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Article',
  });

  return Article;
};
