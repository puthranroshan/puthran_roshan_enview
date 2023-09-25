const express = require('express');
const router = express.Router();
const alertsController = require('../controllers/alertsController');

// Define the route for getting alerts by ID
router.get('/:alert_id', alertsController.getAlert);

module.exports = router;
