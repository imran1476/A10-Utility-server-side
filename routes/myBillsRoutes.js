const express = require("express");
const { getMyBills, addMyBill, updateMyBill, deleteMyBill } = require("../controllers/myBillsController");
const router = express.Router();

router.get("/", getMyBills);
router.post("/", addMyBill);
router.put("/:id", updateMyBill);
router.delete("/:id", deleteMyBill);

module.exports = router;
