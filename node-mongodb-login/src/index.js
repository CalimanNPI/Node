const http = require("http");
const app = require("./config/app");

const server = http.createServer(app);

//listen the server
server.listen(app.get("port"), () => {
  console.log("server on port: ", app.get("port"));
});
