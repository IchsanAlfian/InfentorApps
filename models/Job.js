module.exports = (sequelize, DataTypes) => {
    const Job = sequelize.define('Job',{
        jobId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
          },
          nameJob: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          strong_in: {
            type: DataTypes.STRING,
            allowNull: false
          },
          famous_example: {
            type: DataTypes.STRING,
            allowNull: false
          },
          urlPictFamous: {
            type: DataTypes.STRING,
            allowNull: false
          }
    },{
      tableName: 'tb_job',
      createdAt: false,
      updatedAt: false
    });

    return Job;
}