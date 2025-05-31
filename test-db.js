const  sequelize  = require('./src/models/index');


(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ MySQL connection successful!');
  } catch (err) {
    console.error('❌ MySQL connection failed:', err.message);
  } finally {
    await sequelize.close();
  }
})();
