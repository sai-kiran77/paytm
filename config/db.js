// config/db.js
const mongoose = require('mongoose');
// mongodb+srv://saikiran3916:TES4l328juZZffAZ@practice-mongodb.zr0usdj.mongodb.net/?retryWrites=true&w=majority&appName=practice-MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    // process is a global object in Node.js that provides information and control over the current Node.js process.
    // Environment variables (process.env)
    // Command-line arguments (process.argv)
    // Exiting the process (process.exit) or terminating the server

    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
