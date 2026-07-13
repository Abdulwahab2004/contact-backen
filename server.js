const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/contactdb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/contact", require("./routes/ContactRoutes"));

const PORT = process.env.PORT || 4050;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});