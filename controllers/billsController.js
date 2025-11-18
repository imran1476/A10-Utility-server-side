const Bill = require("../models/Bill");

// Get all bills (newest first)
exports.getBills = async (req, res) => {
  try {
    const { category, limit } = req.query;
    const query = category ? { category } : {};
    const bills = await Bill.find(query)
      .sort({ date: -1 }) // newest first
      .limit(parseInt(limit) || 0);
    res.json(bills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get bill by ID
exports.getBillById = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);
    if (!bill) return res.status(404).json({ message: "Bill not found" });
    res.json(bill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a bill
exports.addBill = async (req, res) => {
  try {
    const newBill = new Bill(req.body);
    const savedBill = await newBill.save();
    res.status(201).json(savedBill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
