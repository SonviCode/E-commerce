const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch((err) => {
      console.log(err);
      process.exit();
    });
};

module.exports = connectDB;
