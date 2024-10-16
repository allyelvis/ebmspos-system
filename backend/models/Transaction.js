const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  date: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
  items: [{ product: { type: String }, quantity: { type: Number }, price: { type: Number } }]
});

module.exports = mongoose.model('Transaction', transactionSchema);
