const loadCSV = require('../utils/csvLoader');

exports.uploadCSV = async (req, res) => {
  try {
    await loadCSV(req.file.path);
    res.status(200).json({ message: 'CSV loaded successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
