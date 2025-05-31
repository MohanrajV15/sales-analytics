module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    tableName: 'Products',
    timestamps: false
  });
};
