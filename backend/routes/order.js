const express = require("express");
const {
  getAllOrderByEmail,
  getOrderById,
  createOrder,
} = require("../controllers/order");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/:email", getAllOrderByEmail);
router.get("/:id", getOrderById);
router.post("/", createOrder);

module.exports = router;
