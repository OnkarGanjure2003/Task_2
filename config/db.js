const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Ensure environment variables are loaded

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017', {

      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
