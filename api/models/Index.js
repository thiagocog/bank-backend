const config = require(__dirname + '/../../db/config.js');
const path = require('path');
const fs = require('fs');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';


const db = {}

let sequelize

if(config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, {
    ...config,
    pool: {
      max: 2,
      min: 0,
      idle: 5000
    }
  })
}


// const modelServices = require('./services')
// db.services = modelServices(sequelize, Sequelize.DataTypes)
// const modelClients = require('./clients')
// db.clients = modelClients(sequelize, Sequelize.DataTypes)

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  })


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db


// useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const { latitude, longitude } = position.coords
  //       setLatitude(latitude)
  //       setLongitude(longitude)
  //       console.log('Localização reconhecida com sucesso!')
  //     },
  //     (err) => {
  //       console.log('Erro ao pegar a localização2')
  //     },
  //     {
  //       timeout: 30000
  //     }
  //   )
  // }, [])