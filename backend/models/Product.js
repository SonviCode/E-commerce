const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: { type: String, required: false },
  file: { type: String, required: false },
  price: { type: Number, required: false },
  category: { type: String, required: false },
  type: { type: String, required: false },
  smallDescription: { type: String, required: false },
  bigDescription: { type: String, required: false },
  star: { type: Array, required: false },
  sex: { type: String, required: false },
  comments: { type: Array, required: false },
  sport: { type: String, required: false },
  size: { type: String, required: false },
  brand: { type: String, required: false },
  counterShop: { type: Number, required: false },
});

module.exports = mongoose.model("Product", ProductSchema);
