const eventsDatabase = [];
const { checkRuleAndGenerateAlerts } = require('./alertsController');

// Controller for adding events
const addEvent = (req, res) => {
  const event = req.body;

  // Store the event in the database
  eventsDatabase.push(event);

  // Check for rule conditions and generate alerts
  checkRuleAndGenerateAlerts();

  res.status(201).json({ message: 'Event received and processed.' });
};

module.exports = {
  addEvent,
};
