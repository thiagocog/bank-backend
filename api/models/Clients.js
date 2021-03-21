module.exports = (sequelize, DataTypes) => {
  const clients = sequelize.define('clients', 
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
        unique: true
      },
      client_name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      client_email: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      client_address: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      value: {
        allowNull: false,
        type: DataTypes.FLOAT
      },
    },
    {
      underscored: true,
      paranoid: true,
      timestamps: false
    }
  )

  clients.associate = function (models) {
    clients.belongsTo(models.services, {
      foreignKey: 'service_id',
      as: 'service'
    })
  }

  return clients
}