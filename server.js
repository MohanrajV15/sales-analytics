const app = require('./src/app');
const { sequelize} = require('./src/models');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
