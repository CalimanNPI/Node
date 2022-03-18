const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const note = new Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  user: { type: String, require: true },
  created: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("note", note);
