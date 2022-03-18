const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  nick: String,
  msg: String,
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("chat", ChatSchema);
