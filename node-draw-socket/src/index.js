const express = require("express");
const path = require("path");
const http = require("http");
const socketIO = require("socket.io");
const ejs = require("ejs-mate");
const sockets = require("./sockets");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

//setting
app.set("port", process.env.PORT || 3000);
app.engine(".ejs", ejs);
app.set("view engine", ".ejs");
app.set("views", path.join(__dirname, "public"));

//socktes
sockets(io);

//routes
app.get("/", (req, res, next) => {
  res.render("index");
});

//static files
app.use(express.static(path.join(__dirname, "public")));

//server
server.listen(app.get("port"), () => {
  console.log("server on port:", app.get("port"));
});
