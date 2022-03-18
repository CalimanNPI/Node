const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const car = new Schema({
  make: String,
  model: String,
  year: Number,
  seller: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("car", car);
