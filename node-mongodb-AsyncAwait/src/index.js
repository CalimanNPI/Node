const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

const userRouter = require("./routes/users.js");

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/node-mongodb-AsyncAwait-api", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log("error", err);
  });

//setting
app.set("port", process.env.PORT || 3000);

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

//routers
app.use("/user", userRouter);
//static files

//err handlers

//server live
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
