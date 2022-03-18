const express = require("express");
const path = require("path");
const ejs = require("ejs-mate");

const route = require("./routes/index");
const app = express();

//setting
app.set("port", process.env.PORT || 3000);
app.engine(".ejs", ejs);
app.set("view engine", ".ejs");
app.set("views", path.join(__dirname, "views"));

//middleware

//routes
app.use(route);

//static files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
