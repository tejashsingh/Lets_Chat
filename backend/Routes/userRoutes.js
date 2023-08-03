const express = require("express");
const { allUsers, registerUser, authUser } = require("../Controllers/userControllers");

const router = express.Router();

// router.route("/").get(protect, allUsers);
router.route("/").post(registerUser).get(allUsers);
router.post("/login", authUser);

module.exports = router;