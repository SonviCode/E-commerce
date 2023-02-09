const express = require("express");
const {
  createProduct,
  getProduct,
  getProductById,
  getProductByCategory,
} = require("../controllers/product");
const router = express.Router();

router.get("/", getProduct);
router.get("/category/:category", getProductByCategory);
router.get("/:id", getProductById);
router.post("/", createProduct);

module.exports = router;
