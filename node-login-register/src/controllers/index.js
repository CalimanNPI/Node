const bcryptjs = require("bcryptjs");

const connect = require("../config/db");

module.exports = {
  index: (req, res, next) => {
    res.render("index");
  },

  login: (req, res, next) => {
    res.render("login");
  },
  auth: (req, res, next) => {
    const { email, password } = req.body;
    connect.execute(
      "SELECT password FROM user WHERE email =? LIMIT 1",
      [email],
      (err, result) => {
        if (err) {
          res.render("login");
        }
        if (bcryptjs.compareSync(password, result[0].password)) {
          res.render("index");
        }
      }
    );
  },
  logout: (req, res, next) => {},

  register: (req, res, next) => {
    res.render("register");
  },
  created: async (req, res, next) => {
    const { email, name, password } = req.body;
    let errors = [];

    if (!email) {
      errors.push({ message: "Required Email" });
    }
    if (!password) {
      errors.push({ message: "Required Password" });
    }

    if (errors.length > 0) {
      res.render("register", errors);
    }

    console.log(password);
    const salt = bcryptjs.genSaltSync(10);
    const hash = await bcryptjs.hashSync(password, salt);

    connect.execute(
      "INSERT INTO user(name, email, password) VALUES(?, ?, ?)",
      [name, email, hash],
      function (err, result, fields) {
        if (!err) {
          res.render("index");
        }
        res.render("register");
      }
    );
  },
};
