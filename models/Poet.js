const mongoose = require("mongoose");
const { Schema } = mongoose;

const poetSchema = new Schema({
  author: String,
  origin: String,
  bio: String,
  image: String
});

const poets = mongoose.model("poet", poetSchema);

module.exports = poets;
