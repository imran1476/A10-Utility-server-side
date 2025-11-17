const express = require("express");
const { getBills, getBillById, addBill } = require("../controllers/billsController");

const router = express.Router();

// Get all bills
router.get("/", getBills);

// Get single bill by ID
router.get("/:id", getBillById);

// Add new bill
router.post("/", addBill);

module.exports = router;
