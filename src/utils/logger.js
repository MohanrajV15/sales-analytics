const fs = require('fs');
const path = require('path');

const logPath = path.join(__dirname, '../logs/refresh.log');

function logMessage(message) {
  const timestamp = new Date().toISOString();
  const entry = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(logPath, entry);
}

module.exports = logMessage;
