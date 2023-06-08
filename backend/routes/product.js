const express = require("express");
const {
  createProduct,
  getProducts,
  getProductById,
  getProductByCategory,
  addComment,
} = require("../controllers/product");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const router = express.Router();

router.get("/", getProducts);
router.get("/category/:category", getProductByCategory);
router.get("/:id", getProductById);
router.post("/", auth, multer, createProduct);
router.put("/:id", auth, addComment);

module.exports = router;
