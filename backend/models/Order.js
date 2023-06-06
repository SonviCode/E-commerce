const mongoose = require("mongoose");
const ProductModel = require("../models/Product").model("Product").schema;

const OrderSchema = mongoose.Schema({
  user: { type: Object, required: true },
  payment: { type: Object, required: true },
  products: [ProductModel],
  delivery: { type: Object, required: true },
  createdDate: { type: Date, required: true },
});

module.exports = mongoose.model("Order", OrderSchema);
