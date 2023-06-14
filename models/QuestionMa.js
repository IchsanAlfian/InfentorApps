module.exports = (sequelize, DataTypes) => {
    const QuestionMa = sequelize.define('QuestionMa',{
        maQuestionId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        questionText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        typeIntelegent: {
            type: DataTypes.STRING,
            allowNull:false
        }
    },{
      tableName: 'tb_maQuestion',
      createdAt: false,
      updatedAt: false
    });

    return QuestionMa;
}