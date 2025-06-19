const express = require("express");
const router = express.Router();
const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");
const { updateUserByAdmin, getAllUsers } = require("../controllers/adminController");

console.log("verifyToken", typeof verifyToken); // should be 'function'
console.log("verifyAdmin", typeof verifyAdmin); // should be 'function'

router.get("/users", verifyToken, verifyAdmin, getAllUsers);
router.put("/update/:id", verifyToken, verifyAdmin, updateUserByAdmin);

module.exports = router;

