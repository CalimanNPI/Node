const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

const router = require("./routers/index");

//setting
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middleware
//app.use(express.json());
app.use(morgan('dev'));

//router
app.use(router);

//static files
app.use(express.static(path.join(__dirname, "public")));

//server
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
