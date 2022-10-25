'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) { // migrando o banco de dados para uma versão acima
    await queryInterface.createTable('clientes', { // criando o modelo da tabela
      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING
      }
    });
     
  },

  async down (queryInterface, Sequelize) { // migrando o banco de dados para uma versão abaixo
   await queryInterface.dropTable('clientes'); // fazendo o drop da tabela
  }
};
