const express = require('express');
const preferenceController = require('../controllers/preference.controller');

const router = express.Router();
router.route('/').get(preferenceController.getAllPreferences).post(preferenceController.createPreference);

module.exports = router;
