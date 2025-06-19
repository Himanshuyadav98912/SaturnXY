const User = require("../models/User");

exports.updateUserByAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { investmentAmount, totalReturns, todayReturns } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { investmentAmount, totalReturns, todayReturns },
      { new: true }
    );

    if (!updatedUser) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User updated", user: updatedUser });
  } catch (err) {
    console.error("Admin Update Error:", err);
    res.status(500).json({ message: "Update failed" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
};


