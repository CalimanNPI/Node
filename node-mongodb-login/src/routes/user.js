const router = require("express").Router();
const {
  signupForm,
  newUser,
  signinForm,
  signin,
  logout,
} = require("../controllers/users");

router.get("/user/signin", signinForm);
router.post("/user/signin", signin);

router.get("/user/signup", signupForm);
router.post("/user/signup", newUser);

router.get("/user/logout", logout);

module.exports = router;
