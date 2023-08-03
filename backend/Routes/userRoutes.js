const express = require("express");
const { allUsers, registerUser, authUser } = require("../Controllers/userControllers");
const {protect}= require("../middleware/authMiddleware");
const router = express.Router();

// router.route("/").get(protect, allUsers);
router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);

module.exports = router;