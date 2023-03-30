const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  price: { type: Number, required: false },
  delivery: {
    name: { type: String, required: false },
    text: { type: String, required: false },
    price: { type: Number, required: false },
  },
  products: { type: Array, required: false },
  createdDate: { type: Date, required: true },
});

module.exports = mongoose.model("Order", OrderSchema);
