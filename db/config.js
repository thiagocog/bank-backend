

const node_environment = process.env.NODE_ENV || `development`;

if (node_environment === `development`) {
  require('dotenv').config();
};

module.exports = {
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  logging: false
}
