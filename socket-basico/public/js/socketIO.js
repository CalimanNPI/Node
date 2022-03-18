let socket = io();
      socket.on("connect", function () {
        console.log("conectado el servidor");
      });
      socket.on("disconnect", function () {
        console.log("Perdimos conección con el servidor :(");
      });
      socket.on("enviarMensaje", (mensaje) => {
        console.log(mensaje);
      });

      socket.emit("enviarMensaje", {
        usuario: "Carlos",
        mensaje: "Hola mundo",
      }, function (resp) {
        console.log('Se disparó el callback: ', resp);
      });