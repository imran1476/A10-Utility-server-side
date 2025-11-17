const MyBill = require("../models/MyBill");

// GET /my-bills?email=
exports.getMyBills = async (req, res) => {
  try {
    const email = req.query.email;
    if (!email) return res.status(400).json({ message: "Email is required" });
    const bills = await MyBill.find({ email });
    res.json(bills);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to get bills" });
  }
};

// POST /my-bills
exports.addMyBill = async (req, res) => {
  try {
    const { billId, username, email, amount, address, phone, date } = req.body;

    if (!billId || !username || !email || !amount || !address || !phone || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBill = new MyBill({ billId, username, email, amount, address, phone, date });
    await newBill.save();
    res.status(201).json(newBill);
  } catch (err) {
    console.error("ADD MY BILL ERROR:", err);
    res.status(500).json({ message: "Failed to add bill", error: err.message });
  }
};

// PUT /my-bills/:id
exports.updateMyBill = async (req, res) => {
  try {
    const { id } = req.params;
    const { address, phone } = req.body;
    const updated = await MyBill.findByIdAndUpdate(id, { address, phone }, { new: true });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update bill" });
  }
};

// DELETE /my-bills/:id
exports.deleteMyBill = async (req, res) => {
  try {
    const { id } = req.params;
    await MyBill.findByIdAndDelete(id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete bill" });
  }
};
