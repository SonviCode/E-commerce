const express = require("express");
const port = 5000;

const app = express();



app.use(express.json());

app.get("/post", (req, res) => {
  res.json({ message: "voici les datas" });
});

app.listen(port, () => console.log("Server start at port" + port));
