const express = require("express");
const { createProduct, getProduct, getProductById } = require("../controllers/product");
const router = express.Router();

router.get("/", getProduct);
router.get("/:id", getProductById);
router.post("/", createProduct);

module.exports = router;
