const express = require("express");
const path = require("path");
const http = require("http");
const app = express();
const SocketsIO = require("socket.io");
const { disconnect } = require("process");

//setting
app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, "public")));

//start the server
const server = app.listen(app.get("port"), () => {
  console.log("server on port *:3000");
});

//websockets
const io = SocketsIO(server);

io.on("connection", (socket) => {
  console.log("new connection");
  socket.on("disconnect", () => {
    console.log("disconnect");
  });
  socket.on("chat:message", (msg) => {
    io.socket.emit("chat:message", msg);
  });

  socket.on("chat:typing", (msg) => {
    socket.broadcast.emit("chat:typing", msg);
  });
});
