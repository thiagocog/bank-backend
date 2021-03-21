'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('services', 
      [
        {
          name: 'Mortgages',
          description: 'Could we help you save money on your mortgage? We have all the tools to help you find out.',
          manager: 'Tim Berners-Lee'
        },
        {
          name: 'Credit Cards',
          description: 'Whether you’re looking to transfer a balance or travel abroad, our credit cards are designed to suit your lifestyle.',
          manager: 'Guido van Rossum'
        },
        {
          name: 'Investments',
          description: 'Start investing from just £50. Once you’ve invested, it will be managed by Coutts investment managers, so they will do the hard work for you.',
          manager: 'Rasmus Lerdorf'
        },
        {
          name: 'Savings',
          description: 'Savings that suit you. We want to help you save in a way that’s best for you. Compare our accounts and reach your savings goals.',
          manager: 'Larry Wall'
        },
      ], 
      {
        updateOnDuplicate: ['name', 'description', 'manager'],
        ignoreDuplicates: true
      }
    );
  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('services', null, {});
  }
};
