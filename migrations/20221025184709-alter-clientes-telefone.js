'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('clientes', 'telefone', { // adicionando uma nova coluna
      type: Sequelize.STRING,
      allowNull: true
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('clientes', 'telefone'); // removendo a coluna e retornando o banco de dados para a versão anterior
  }
};
