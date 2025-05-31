module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Order', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    customerId: { type: DataTypes.INTEGER },
    productId: { type: DataTypes.INTEGER },
    quantity: DataTypes.INTEGER,
    saleDate: DataTypes.DATE
  }, {
    tableName: 'Orders',
    timestamps: false
  });
};
