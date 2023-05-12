const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require('path');

// --router--
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const stripeRoutes = require("./routes/stripe");

// if (process.env.NODE_ENV === "development") {
//   dotenv.config();
// }
dotenv.config();

const app = express();

// --connection db--
connectDB();

// --authorisation cors--
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// --app use--
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// --router--
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/auth", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/stripe", stripeRoutes);

module.exports = app;
