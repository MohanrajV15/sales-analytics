const express = require('express');
const router = express.Router();
const ansController = require('../controllers/ansController');

router.get('/top-products', ansController.getTopProducts);
router.get('/top-customers', ansController.getTopCustomers);

module.exports = router;
