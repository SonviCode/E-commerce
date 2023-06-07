const express = require("express");
const {
  createProduct,
  getProducts,
  getProductById,
  getProductByCategory,
  updateProduct,
} = require("../controllers/product");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const router = express.Router();

router.get("/", getProducts);
router.get("/category/:category", getProductByCategory);
router.get("/:id", getProductById);
router.post("/", auth, multer, createProduct);
router.put("/:id", auth, updateProduct);

module.exports = router;
