module.exports = (sequelize, DataTypes) => {
  const services = sequelize.define('services', 
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
      },
      name: {
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      manager: {
        type: DataTypes.TEXT,
        allowNull: false
      },   
    },
    {
      underscored: true,
      paranoid: true,
      timestamps: false
    }
  )
  return services
}
