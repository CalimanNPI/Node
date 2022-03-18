const http = require("http");
const socketIO = require("socket.io");
const app = require("./app");
const sockets = require("./sockets");

const server = http.createServer(app);
const io = socketIO(server);

sockets(io);

server.listen(app.get("port"), () => {
  console.log("server on port:", app.get("port"));
});
