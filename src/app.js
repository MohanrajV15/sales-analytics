const express = require('express');
const app = express();
const csvRoutes = require('./routes/csvRoutes');
const analysisRoutes = require('./routes/ansRoutes');

app.use(express.json());
app.use('/api/csv', csvRoutes);
app.use('/api/analysis', analysisRoutes);

module.exports = app;
