const http = require("http");
const app = require("./app");
const socketIO = require("socket.io");
const sockets = require("./sockets");
const mongoose = require("mongoose");

const server = http.createServer(app);
const io = socketIO(server);
  
mongoose
  .connect("mongodb://localhost/node-mongodb-chat-sockets", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log(err);
  });


sockets(io);

//server
server.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
