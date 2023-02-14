const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  smallDescription: { type: String, required: true },
  bigDescription: { type: String, required: true },
  like: { type: Boolean, required: true },
  star: { type: Array, required: true },
  sex: { type: String, required: true },
  comments: { type: Array, required: false },
  sport: { type: String, required: true },
  size: { type: String, required: true },
  brand: { type: String, required: true },
});

module.exports = mongoose.model("Product", ProductSchema);
