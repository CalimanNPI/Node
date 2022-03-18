"use strict";

const express = require("express");

const app = express(); //setting

app.set("port", process.env.PORT || 3000); //server

app.listen(app.get("port"), () => {
  console.log("Server on por:", app.get("port"));
});