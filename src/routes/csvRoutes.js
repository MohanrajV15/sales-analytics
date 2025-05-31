const express = require('express');
const multer = require('multer');
const router = express.Router();
const csvController = require('../controllers/csvController');

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), csvController.uploadCSV);

module.exports = router;
