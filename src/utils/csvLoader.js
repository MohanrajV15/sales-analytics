const fs = require('fs');
const csv = require('csv-parser');
const  sequelize  = require('../models/index'); // ✅ Get the Sequelize instance
const { Customer, Product, Order } = require('../models');
const log = require('./logger');

async function loadCSV(filepath) {
  console.log('Customer model:', Customer); // Check if it's undefined

  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream(filepath)
      .pipe(csv())
      .on('data', (row) => results.push(row))
      .on('end', async () => {
        try {
          for (const row of results) {
            await Product.upsert({
              id: row['Product ID'],
              name: row['Product Name'],
              category: row['Category']
            });

            await Customer.upsert({
              id: row['Customer ID'],
              name: row['Customer Name'],
              email: row['Customer Email'],
              address: row['Customer Address']
            });

            await Order.upsert({
              id: row['Order ID'],
              productId: row['Product ID'],
              customerId: row['Customer ID'],
              dateOfSale: row['Date of Sale'],
              quantitySold: row['Quantity Sold'],
              unitPrice: row['Unit Price'],
              discount: row['Discount'],
              shippingCost: row['Shipping Cost'],
              paymentMethod: row['Payment Method']
            });
          }

          log('CSV data loaded successfully.');
          resolve();
        } catch (err) {
          log(`Error loading CSV: ${err.message}`);
          reject(err);
        }
      });
  });
}

module.exports = loadCSV;
