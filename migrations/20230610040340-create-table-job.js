'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tb_job', {
      jobId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      nameJob: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      strong_in: {
        type: Sequelize.STRING,
        allowNull: false
      },
      famous_example: {
        type: Sequelize.STRING,
        allowNull: false
      },
      urlPictFamous: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },{
      createdAt: false,
      updatedAt: false
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_essayQuestion');
  }
};
