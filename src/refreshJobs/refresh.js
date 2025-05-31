const loadCSV = require('../utils/csvLoader');
const path = require('path');

async function refreshData() {
  const filepath = path.join(__dirname, '../uploads/data.csv');
  try {
    await loadCSV(filepath);
  } catch (error) {
    console.error('Refresh failed:', error.message);
  }
}

module.exports = refreshData;
