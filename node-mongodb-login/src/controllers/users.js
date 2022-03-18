const User = require("../models/user");
const passport = require("passport");

module.exports = {
  signupForm: (req, res) => {
    res.render("users/signup");
  },
  newUser: async (req, res, next) => {
    const { name, email, password, confirm_password } = req.body;
    const errors = [];
    console.log(req.body);

    /*if (password === confirm_password) {
      errors.push({ text: "Password do no mach" });
    }*/

    if (!password) {
      errors.push({ text: "Place write the password" });
    }
    if (password < 4) {
      errors.push({ text: "Password must be at least 4 characters" });
    }

    const emailUser = await User.findOne({ email });
    if (emailUser) {
      errors.push({ text: "The email is already in use" });
    }

    if (errors.length > 0) {
      res.render("users/signup", { name, email, errors });
    } else {
      const user = new User({ name, email, password });
      user.password = await user.encryptPassword(password);
      await user.save();
      res.redirect("/user/signin");
    }
  },
  signinForm: (req, res) => {
    res.render("users/signin");
  },
  signin: passport.authenticate("local", { failureRedirect: "/user/signin" }),
  function(req, res) {
    res.redirect("/notes");
  },
  logout: (req, res) => {
    req.logout();
    req.flash("success_msg", "You are logged out now.");
    res.redirect("/users/signin");
  },
};
