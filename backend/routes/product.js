const express = require("express");
const {
  createProduct,
  getProduct,
  getProductById,
  getProductByCategory,
} = require("../controllers/product");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const router = express.Router();

router.get("/", getProduct);
router.get("/category/:category", getProductByCategory);
router.get("/:id", getProductById);
router.post("/", auth, multer, createProduct);

module.exports = router;
