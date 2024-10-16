const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Dummy database
let customers = [];
let products = [];
let transactions = [];

// Customer Management
app.get('/api/customers', (req, res) => {
  res.json(customers);
});

app.post('/api/customers', (req, res) => {
  const customer = req.body;
  customer.id = Date.now();
  customers.push(customer);
  res.json(customer);
});

// Product Management
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const product = req.body;
  product.id = Date.now();
  products.push(product);
  res.json(product);
});

// Transaction Management
app.get('/api/transactions', (req, res) => {
  res.json(transactions);
});

app.post('/api/transactions', async (req, res) => {
  const transaction = req.body;
  transaction.id = Date.now();
  transactions.push(transaction);

  // EBMS Burundi integration
  const invoiceData = {
    customer: transaction.customerId,
    product: transaction.productId,
    quantity: transaction.quantity
  };
  try {
    const response = await axios.post('https://ebms.obr.gov.bi:9443/ebms_api/addInvoice', invoiceData, {
      headers: {
        Authorization: 
      }
    });
    res.json({ transaction, ebmsResponse: response.data });
  } catch (error) {
    res.status(500).json({ error: "EBMS Integration failed", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
