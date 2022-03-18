const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/upload", (req, res) => {
  console.log(req.file, req.body);
  res.redirect("/");
});

module.exports = router;
