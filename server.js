const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send('Server is running at http://localhost:3000');
});

// POST route for /buy
app.post('/buy', (req, res) => {
  const { crypto, amount, price } = req.body;

  if (!crypto || !amount || !price) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  res.json({
    message: `Bought ${amount} ${crypto} at $${price}`,
    total: amount * price
  });
});

// Optional: Add a /sell endpoint
app.post('/sell', (req, res) => {
  const { crypto, amount, price } = req.body;

  if (!crypto || !amount || !price) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  res.json({
    message: `Sold ${amount} ${crypto} at $${price}`,
    total: amount * price
  });
});

// Optional: Add a /balance endpoint
app.get('/balance', (req, res) => {
  res.json({ balance: 100000 });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});