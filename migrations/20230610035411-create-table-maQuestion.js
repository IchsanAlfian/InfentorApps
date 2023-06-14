'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tb_maQuestion', {
      maQuestionId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      questionText: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      typeIntelegent: {
        type: Sequelize.STRING,
        allowNull:false
      }
    },{
      createdAt: false,
      updatedAt: false
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_maQuestion');
  }
};
