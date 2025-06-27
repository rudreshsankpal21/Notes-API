const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUsers,
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", registerUser);

router.post("/login", authMiddleware, loginUser);

router.get("/users", getUsers);

module.exports = router;
