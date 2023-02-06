const express = require("express");
const { createProduct, getProduct } = require("../controllers/product");
const router = express.Router();

router.get("/", getProduct);
router.post("/", createProduct);

module.exports = router;
