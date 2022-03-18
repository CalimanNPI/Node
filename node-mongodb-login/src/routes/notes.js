const router = require("express").Router();
const { isAuthenticated } = require("../helpers/auth");
const {
  index,
  showNote,
  createNote,
  newNote,
  editNote,
  updateNote,
  deleteNote,
} = require("../controllers/notes");

router.get("/notes", isAuthenticated, index);
router.get("/notes/note/:id", isAuthenticated, showNote);

router.get("/notes/add", isAuthenticated, createNote);
router.post("/notes/new-note", isAuthenticated, newNote);

router.get("/notes/edit/:id", isAuthenticated, editNote);
router.put("/notes/edit-note/:id", isAuthenticated, updateNote);

router.delete("/notes/delete/:id", isAuthenticated, deleteNote);

module.exports = router;
