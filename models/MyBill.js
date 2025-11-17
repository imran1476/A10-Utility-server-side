const mongoose = require("mongoose");

const myBillSchema = new mongoose.Schema({
  billId: { type: mongoose.Schema.Types.ObjectId, ref: "Bill", required: true },
  username: String,
  email: String,
  phone: String,
  address: String,
  amount: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("MyBill", myBillSchema);
