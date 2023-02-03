const mongoose = require("mongoose");

// const userSchema = mongoose.Schema({
//   name: { type: String, required: true },

// });
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  firstname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  birthday: { type: Date, required: true },
  phonenumber: { type: Number, required: true },
});

module.exports = mongoose.model("User", userSchema);
