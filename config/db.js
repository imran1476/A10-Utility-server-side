// config/db.js
const mongoose = require("mongoose");

// MongoDB connection function
const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error("Error: MONGO_URI is not defined in .env");
    process.exit(1); // Exit process with failure
  }

  try {
    // Connect to MongoDB
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:");
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
