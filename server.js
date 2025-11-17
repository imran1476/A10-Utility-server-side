require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const billsRoutes = require("./routes/billsRoutes");
const myBillsRoutes = require("./routes/myBillsRoutes");

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/bills", billsRoutes);
app.use("/api/my-bills", myBillsRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
