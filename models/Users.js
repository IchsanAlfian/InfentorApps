module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users',{
        id_user: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
    },
        username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
        email: {
        type: DataTypes.STRING,
        allowNull: false
    },
        password: {
        type: DataTypes.STRING,
        allowNull: false
    },
        confirm_password:{
        type: DataTypes.STRING,
        allowNull: false
        }
    },{
        tableName: 'users',
        createdAt: false,
        updatedAt: false
    });
    return Users;
}