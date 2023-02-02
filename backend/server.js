const http = require("http");
const app = require("./app");

// if (process.env.NODE_ENV === "development") {
//   dotenv.config();
// }

const port = process.env.PORT || 5000;

app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => console.log("Server start at port" + port));
