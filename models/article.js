'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Article extends Model {
    static associate(models) {
      this.belongsTo(models.Author, {
        foreignKey: {
          name: 'author_id', // naming convention typically uses snake_case
          allowNull: false // assuming each article must have an author
        }
      })
      this.belongsToMany(models.Tags, {
        foreignKey: 'articleId',
        through: 'ArticleTags',
      })
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
      type: DataTypes.INTEGER,
      allowNull: false // assuming each article must have an author
    }
  }, {
    sequelize,
    modelName: 'Article',
  });

  return Article;
};
