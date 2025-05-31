

const { Order,Customer,Product,sequelize} = require('../models');
const { Op, fn, col } = require('sequelize');

exports.getTopProducts = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 5;

    const topProducts = await Order.findAll({
       attributes: [
         'id',
         [sequelize.fn('SUM', sequelize.col('total_price')), 'total_revenue']
       ],
      group: ['id'],
       order: [[sequelize.fn('SUM', sequelize.col('total_price')), 'DESC']],
      limit: limit
    });

    res.json(topProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getTopCustomers = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 5;

    const topCustomers = await Order.findAll({
      attributes: [
        'Customer ID',
        [sequelize.fn('SUM', sequelize.col('total_price')), 'total_spent']
      ],
      group: ['CustomerID'],
      order: [[sequelize.fn('SUM', sequelize.col('total_price')), 'DESC']],
      limit: limit
    });

    res.json(topCustomers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
