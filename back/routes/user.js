const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

// Route for user
router.post('/data', userCtrl.userdata);
router.get('/', userCtrl.getdata);
router.get('/avg', userCtrl.getaverage);
router.get('/med', userCtrl.getmedian);

// Exporting
module.exports = router;