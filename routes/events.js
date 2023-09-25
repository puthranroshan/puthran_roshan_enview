const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController');

// Define the route for adding events
router.post('/', eventsController.addEvent);

module.exports = router;
