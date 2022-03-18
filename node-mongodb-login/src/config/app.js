const express = require("express");
const path = require("path");
const { create, engine } = require("express-handlebars");
const methodOverride = require("method-override");
const session = require("express-session");
const passport = require("passport");
const flash=require('connect-flash');

//initiliazation
const app = express();
require("../config/database");
require("../config/passport");

const indexRouter = require("../routes/index");
const noteRouter = require("../routes/notes");
const userRouter = require("../routes/user");

//setting
app.set("port", process.env.PORT || 3000);

app.engine(
  ".hbs",
  engine({
    defaultLayout: "main",
    //layoutsDir: path.join(app.get("views"), "layouts"),
    //partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "../views"));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "myApp",
    saveUninitialized: true,
    resave: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Global Variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});

//routes
app.use(indexRouter);
app.use(noteRouter);
app.use(userRouter);

//static files
app.use(express.static(path.join(__dirname, "../public")));

app.use((req, res) => {
  res.render("404");
});

module.exports = app;
