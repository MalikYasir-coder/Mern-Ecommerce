const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.port || 3000;
const connectDB = require("./config.js/db");
connectDB();

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
