const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Adjust if needed

router.get("/", async (req, res) => {
  const query = req.query.query;

  try {
    const results = await User.find({
      $or: [
        { name: new RegExp(query, "i") },
        { email: new RegExp(query, "i") },
      ],
    }).select("-password");

    res.json({ results }); // Send JSON
  } catch (err) {
    console.error("Search failed:", err);
    res.status(500).json({ message: "Search failed" });
  }
});

module.exports = router;
