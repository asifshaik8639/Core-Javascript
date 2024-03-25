const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can change this to your desired port number

app.use(bodyParser.json());

// Define a route to handle incoming webhook POST requests
app.post('/webhook', (req, res) => {
  const payload = req.body;

  // Handle the incoming webhook data here
  console.log('Received webhook data:', payload);

  // Respond with a success status
  res.status(200).send('Webhook received successfully');
});

app.listen(port, () => {
  console.log(`Webhook receiver listening on port ${port}`);
});
