module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Customer', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    region: DataTypes.STRING
  }, {
    tableName: 'Customers',
    timestamps: false
  });
};
