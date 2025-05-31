const { Customer, Product, Order } = require('./src/models');

console.log('Customer model:', Customer?.findAll ? '✅' : '❌');
console.log('Product model:', Product?.findAll ? '✅' : '❌');
console.log('Order model:', Order?.findAll ? '✅' : '❌');
