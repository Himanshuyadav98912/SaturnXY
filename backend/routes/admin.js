const express = require("express");
const router = express.Router();
const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");
const { updateUserByAdmin, getAllUsers } = require("../controllers/adminController");

router.get("/users", verifyToken, verifyAdmin, getAllUsers);
router.put("/update/:id", verifyToken, verifyAdmin, updateUserByAdmin);

module.exports = router;
