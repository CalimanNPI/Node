const Note = require("../models/notes");

module.exports = {
  index: async (req, res) => {
    const user = req.user.id;
    const notes = await Note.find({user}).sort({ date: "desc" }).lean();
    res.render("notes/all-notes", { notes });
  },
  showNote: async (req, res) => {
    const id = req.params.id;
    const note = await Note.findById(id);
    res.render("notes/show-note", { note });
  },
  createNote: (req, res) => {
    res.render("notes/new-note");
  },
  newNote: async (req, res) => {
    const { title, description } = req.body;
    let errors = [];

    if (!title) {
      errors.push({ text: "Place write a title" });
    }

    if (!description) {
      errors.push({ text: "Place write a description" });
    }

    if (errors.length > 0) {
      res.render("notes/new-note", { errors, title, description });
    } else {
      const note = new Note({ title, description });
      note.user = req.user.id;
      await note.save();
      // res.flash("success_msg", "Note created successfully");
      res.redirect("/notes");
    }
  },
  editNote: async (req, res) => {
    const note = await Note.findById(req.params.id).lean();
    if (note.user != req.user.id) {
      //req.flash("error_msg", "Not Authorized");
      res.redirect("/notes");
    }
    res.render("notes/edit-note", { note });
  },
  updateNote: async (req, res) => {
    const id = req.params.id;
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(id, { title, description });
    //res.flash("success_msg", "Note updated successfully");
    res.redirect("/notes");
  },
  deleteNote: async (req, res) => {
    const id = req.params.id;
    await Note.findByIdAndDelete(id);
    //res.flash("success_msg", "Note deleted successfully");
    res.redirect("/notes");
  },
};
