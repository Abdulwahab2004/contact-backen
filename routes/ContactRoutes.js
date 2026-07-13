const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
     console.log("Received Data:");
    console.log(req.body);

    

    const { name, email, website, message } = req.body;

    if (!name || !email || !website || !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
      
    }

    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid Email",
      });
    }

    const newContact = new Contact({
      name,
      email,
      website,
      message,
    });

    await newContact.save();

    res.status(201).json({
      message: "Contact Saved Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;