const { io } = require("../server");

io.on("connection", (client) => {
  console.log("Usuario conectado");

  client.emit("enviarMensaje", {
    usuario: "Admin",
    mensaje: "Bienvenido",
  });

  client.on("disconnect", () => {
    console.log("Usuario desconectado");
  });

  //escuchar el cliente
  client.on("enviarMensaje", (data, callback) => {
    console.log(data);

    client.broadcast.emit('enviarMensaje', data);
    // if (mensaje.usuario) {
    //   callback({
    //     resp: "Todo sali bien!",
    //   });
    // } else {
    //   callback({
    //     resp: "todo salio mal!!!!!!!",
    //   });
    // }
  });
});
