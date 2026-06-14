const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// GET route for root
app.get('/', (req, res) => {
  res.send('Server is running at http://localhost:3000');
});

// POST route for /buy
app.post('/buy', (req, res) => {
  const { crypto, amount, price } = req.body;

  res.json({
    message: `Bought ${amount} ${crypto} at $${price}`,
    total: amount * price
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
app.post('/sell', (req, res) => {
  const { crypto, amount, price } = req.body;

  res.json({
    message: `Sold ${amount} ${crypto} at $${price}`,
    total: amount * price
  });
});