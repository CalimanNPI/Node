const express = require("express");
const router = express.Router();
const {
  index,
  show,
  create,
  update,
  deleteEmployee,
  updateProcedure,
} = require("../controllers/index");

router.get("/", index);

router.get("/:id", show);

router.post("/", create);

router.patch("/:id", update);

router.put("/:id", updateProcedure);

router.delete("/:id", deleteEmployee);

module.exports = router;
