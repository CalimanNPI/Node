const express = require("express");
const path = require("path");
const app = express();
const routers = require("./routers/index.js");

//setting
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(express.json());

//routers
app.use("/company", routers);

//app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
