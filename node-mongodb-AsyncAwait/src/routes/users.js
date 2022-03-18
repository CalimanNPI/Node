const router = require("express-promise-router")();
const {
  index,
  getUser,
  newUser,
  replaceUser,
  updateUser,
  deleteUser,
  getUserCars,
  newUserCar
} = require("../controllers/user");

//Users
router.get("/", index);
router.get("/:userId", getUser);
router.post("/", newUser);
router.put("/:userId", replaceUser);
router.patch("/:userId", updateUser);
router.delete("/:userId", deleteUser);

//Cars
router.get("/:userId/cars", getUserCars);
router.post("/:userId/cars", newUserCar);
module.exports = router;
