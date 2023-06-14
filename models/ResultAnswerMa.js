module.exports = (sequelize, DataTypes) => {
    const ResultAnswerMa = sequelize.define('ResultAnswerMa',{
        idResultAnswerMa: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          typeIntelegentResult: {
            type: DataTypes.ENUM,
            values: ['Kecerdasan Verbal atau Linguistik','Kecerdasan Logis atau Matematis','Kecerdasan Visual atau Spasial','Kecerdasan Kinestetik','Kecerdasan Musikal','Kecerdasan Interpersonal','Kecerdasan Intrapersonal','Kecerdasan Naturalis']
          },
    },{
      tableName: 'tb_resultAnswerMa',
      createdAt: false,
      updatedAt: false
    });

    return ResultAnswerMa;
}