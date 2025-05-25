import express from "express";
import dotenv from "dotenv"; // considers .env parrale to this file for env conguration, can be modified the config file or path if required

import connectDB from './config/db.js';
import authRoutes from "./routes/auth.js";
dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
