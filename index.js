// index.js
const express = require('express');
const dotenv = require('dotenv'); // considers .env parrale to this file for env conguration, can be modified the config file or path if required
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
