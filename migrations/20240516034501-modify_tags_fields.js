'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('Tags', 'id', {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
      })
    ])
  },

  down(queryInterface, Sequelize) {
    return queryInterface.changeColumn('Tags', 'id', {
      type: Sequelize.INTEGER,
      allowNull: true // Adjust allowNull based on your requirements
    });
  }
};
