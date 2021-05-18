const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

// Route for user
router.post('/data', userCtrl.userdata);

// Exporting
module.exports = router;