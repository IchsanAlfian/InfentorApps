'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
    id_user: {
      type: Sequelize.STRING,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    confirm_password:{
      type: Sequelize.STRING,
      allowNull: false
    }
  },{
    createdAt: false,
    updatedAt: false
  })
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_users');
  }
};
