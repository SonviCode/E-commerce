const express = require("express");
const { getUsers, signup, login, getUserById } = require("../controllers/user");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/users", getUsers);
router.get("/user/:id", auth, getUserById);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
