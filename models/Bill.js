const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  email: String,
  location: String,
  description: String,
  image: String,
  date: { type: Date, default: Date.now },
  amount: Number,
});

module.exports = mongoose.model("Bill", billSchema);
