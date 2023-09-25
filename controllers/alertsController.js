const alertsDatabase = [];
const locationThresholds = {
  highway: 4,
  city_center: 3,
  commercial: 2,
  residential: 1,
};

// Controller for getting alerts by ID
const getAlert = (req, res) => {
  const alertId = req.params.alert_id;
  const alert = alertsDatabase.find((a) => a.id === alertId);

  if (alert) {
    res.json(alert);
  } else {
    res.status(404).json({ message: 'Alert not found' });
  }
};

// Function to check the rule and generate alerts
const checkRuleAndGenerateAlerts = () => {
  // ... (same code as before)
};

// Function to generate a unique ID for alerts
const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9);
};

module.exports = {
  getAlert,
  checkRuleAndGenerateAlerts,
};
