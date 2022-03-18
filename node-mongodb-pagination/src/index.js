const path = require("path");
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/node-mongobd-pagination", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {console.log("db is connected")})
  .catch((err) => {console.log(err)});

//setting
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.use(require('./routes/index'));

//static files

app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
 