const mongoose = require("mongoose");
const ProductModel = require("../models/Product").model("Product").schema;
// const userModel = require("../models/User").model("User").schema;

const OrderSchema = mongoose.Schema({
  user: { type: Object, required: true },
  payment: { type: Object, required: true },
  products: [ProductModel],
  createdDate: { type: Date, required: true },
});

module.exports = mongoose.model("Order", OrderSchema);
