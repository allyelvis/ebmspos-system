const express = require('express');
const Transaction = require('../models/Transaction');
const router = express.Router();

// Create a new transaction
router.post('/', async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).send(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find().populate('customer');
    res.send(transactions);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
