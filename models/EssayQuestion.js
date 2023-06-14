module.exports = (sequelize, DataTypes) => {
    const EssayQuestion = sequelize.define('EssayQuestion',{
        essayQuestionId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
          },
          essayQuestion: {
            type: DataTypes.TEXT,
            allowNull:false
          },
          typeIntelegent: {
            type: DataTypes.STRING,
            allowNull: false,
          }
    },{
      tableName: 'tb_essayQuestion',
      createdAt: false,
      updatedAt: false
    });

    return EssayQuestion;
}