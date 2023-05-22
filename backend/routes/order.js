const express = require("express");
const {
  getAllOrderByEmail,
  getOrderById,
  createOrder,
  getOrders,
} = require("../controllers/order");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/:id", getOrderById);
router.get("/", getOrders);
router.post("/", createOrder);

module.exports = router;
