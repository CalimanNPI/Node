module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("New connection");

    socket.on("UserCoordinates", (coords) => {
      console.log(coords);
      socket.broadcast.emit("newUser", coords);
    });
  });
};
