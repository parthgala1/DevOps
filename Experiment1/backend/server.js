const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://parth1356:parth123@cluster0.6x2wuji.mongodb.net/")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Create a Mongoose schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  phone: String,
  dob: Date,
});

// Create a Mongoose model
const User = mongoose.model("User", userSchema);

// Handle form submissions
app.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
