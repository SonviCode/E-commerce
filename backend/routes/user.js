const express = require("express");
const { getUser, signup, login } = require("../controllers/user");
const router = express.Router();

router.get("/user", getUser);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
