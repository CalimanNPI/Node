const router = require("express").Router();
const { index, create, remove, update, show } = require("../controllers/user");

router.get("/", index);
router.get("/:id", show);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
