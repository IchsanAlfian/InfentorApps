'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tb_resultAnswerMa', {
      idResultAnswerMa: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      typeIntelegentResult: {
        type: Sequelize.ENUM,
        values: ['Kecerdasan Verbal atau Linguistik','Kecerdasan Logis atau Matematis','Kecerdasan Visual atau Spasial','Kecerdasan Kinestetik','Kecerdasan Musikal','Kecerdasan Interpersonal','Kecerdasan Intrapersonal','Kecerdasan Naturalis']
      },
    },{
      createdAt: false,
      updatedAt: false
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_resultAnswerMa');
  }
};
