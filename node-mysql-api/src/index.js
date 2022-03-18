const app = require("./app");
const http = require("http");
const server = http.createServer(app);

//server listen
server.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
