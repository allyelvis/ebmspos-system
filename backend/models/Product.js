const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },  // Inventory field
  description: { type: String },               // Optional description
  category: { type: String },                  // Product category
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
