const express = require('express');
const app = express();
const port = 3000;

const eventsRouter = require('./routes/events');
const alertsRouter = require('./routes/alerts');

app.use(express.json());

// Use the event and alert routers
app.use('/event', eventsRouter);
app.use('/alert', alertsRouter);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
