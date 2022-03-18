const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Static app node" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Static app node" });
});
 
module.exports = router;
