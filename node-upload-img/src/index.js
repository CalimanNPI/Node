const express = require("express");
const path = require("path");
const { create, engine } = require("express-handlebars");
const multer = require("multer");
const {v4: uuidv4} = require('uuid')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./temp");
  },
  filename: (req, file, done) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    done(null, uuidv4()+path.extname(file.originalname));
  },
});
const upload = multer({
  dest: "./public/img",
  storage,
  limits: { fileSize: 10000 },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));
    if(mimeType  && extname){
     return cb(null, true);
    }
    cb('error: Archivo no valido')
  },
});

const router = require("./routes/index");
const app = express();

//setting
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".hbs");
app.engine(
  ".hbs",
  engine({
    defaultLayout: "main",
    extname: ".hbs",
  })
);

//Middleware
app.use(upload.single("img"));

//static files

//routes
app.use(router);

//server
app.listen(app.get("port"), () => {
  console.log("server on port:", app.get("port"));
});
