const router = require("express").Router();
const {index, logout, register, login, created, auth}=require('../controllers/index');

router.get("/", index);
router.get('/register', register)
router.get('/login', login)
router.post("/logout", logout);
router.post('/register', created)
router.post('/login', auth)

module.exports = router;
