const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const methodOverride = require("method-override");

const app = express();

//init
const routes = require("./routes/index");

//setting
app.set("port", process.env.PORT || 3000);
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main",
  })
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".hbs");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//static files
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use(routes);

//server
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
