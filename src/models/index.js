const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/db');

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    port: dbConfig.PORT,
    logging: false
  }
);

// Empty object to hold models
const db = {};

// Inject sequelize and DataTypes into each model
db.Customer = require('./customer')(sequelize, DataTypes);
db.Product = require('./product')(sequelize, DataTypes);
db.Order = require('./order')(sequelize, DataTypes);

// Define relationships
db.Order.belongsTo(db.Customer);
db.Order.belongsTo(db.Product);
db.Customer.hasMany(db.Order);
db.Product.hasMany(db.Order);

// Export all
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
