const db = require("../db");

module.exports = {
  index: (req, res, next) => {
    db.execute("SELECT * FROM user", (err, results, fields) => {
      res.render("index", { users: results });
    });
  },
  show: (req, res, next) => {
    var id = req.params.id;
    db.execute(
      "SELECT * FROM user WHERE id_news = ?",
      [id],
      (err, results, fields) => {
        var user = results;
        console.log(user);
        res.render("index", { user });
      }
    );
  },
  create: (req, res, next) => {
    var { name, address, phone } = req.body;
    var errors = [];

    if (!name) {
      errors.push({ text: "Name is require" });
    }

    if (errors.length > 0) {
      res.render("index", { errors });
    } else {
      console.log(req.body);
      db.execute(
        "INSERT INTO user (name, address, phone) values (?,?,?)",
        [name, address, phone],
        (err, results, fields) => {
          res.redirect("/");
          //res.render("index", { message: "user created successfully" });
        }
      );
    }
  },
  update: (req, res, next) => {
    var { name, address, phone } = req.body;
    var id = req.params.id;
    var errors = [];

    if (!name) {
      errors.push({ text: "Name is require" });
    }

    if (errors.length > 0) {
      res.render("index", { errors });
    } else {
      console.log(req.body, "\n " + id);
      db.execute(
        "UPDATE user  SET name=?, address=?, phone=? WHERE id_news = ?",
        [name, address, phone, id],
        (err, results, fields) => {
          res.redirect("/");
          //res.render("index", { message: "user updated successfully" });
        }
      );
    }
  },
  remove: (req, res, next) => {
    var id = req.params.id;
    db.execute(
      "DELETE FROM user WHERE id_news = ?",
      [id],
      (err, result, fields) => {
        //res.render("index", { message: "user deleted successfully" });
        res.redirect("/");
      }
    );
  },
};
