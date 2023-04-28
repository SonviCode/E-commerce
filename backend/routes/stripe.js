const express = require("express");
const {
  stripeConfig,
  createPayement,
  getPayement,
} = require("../controllers/stripe");

const router = express.Router();

router.post("/create-payment-intent", createPayement);
router.get("/config", stripeConfig);
router.get("/get-payment/:id", getPayement);

module.exports = router;
