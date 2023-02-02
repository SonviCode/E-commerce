const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// --router--
const userRoutes = require("./routes/user");

// if (process.env.NODE_ENV === "development") {
//   dotenv.config();
// }
dotenv.config();

const app = express();

// --connection db--
connectDB();

// --app use--
app.use(express.urlencoded());
app.use(express.json());
app.use("/api/auth", userRoutes);

module.exports = app;
