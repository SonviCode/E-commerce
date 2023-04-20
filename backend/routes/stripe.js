const express = require("express");
const { stripeConfig, createPayement } = require("../controllers/stripe");

const router = express.Router();

router.post("/create-payment-intent", createPayement);
router.get("/config", stripeConfig);

module.exports = router;
