'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clients', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      client_name: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      client_email: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      client_address: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      service_id: {
        allowNull: false,
        references: {
          model: 'services', 
          key:'id'
        },
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('clients')
  }
}
