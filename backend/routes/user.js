const express = require("express");
const { getUser, signup, login, getUserById } = require("../controllers/user");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/user", getUser);
router.get("/user/:id", auth, getUserById);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
