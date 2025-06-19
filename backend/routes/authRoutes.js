const express = require("express");
const router = express.Router();
const { signup, login, getDashboardData } = require("../controllers/authController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/signup", signup);
router.post("/login", login);
router.get("/dashboard", verifyToken, getDashboardData);

module.exports = router;
