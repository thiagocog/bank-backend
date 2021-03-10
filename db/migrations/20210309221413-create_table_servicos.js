'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT,
        unique: true
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      manager: {
        allowNull: false,
        type: Sequelize.TEXT
      }
    });     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('services');    
  }
};
