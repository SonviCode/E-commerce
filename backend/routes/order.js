const express = require("express");
const {
  getOrdersByEmail,
  getOrderById,
  createOrder,
  getOrders,
} = require("../controllers/order");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/:id", getOrderById);
router.get("/email/:email", auth, getOrdersByEmail);
router.get("/", getOrders);
router.post("/", createOrder);

module.exports = router;
