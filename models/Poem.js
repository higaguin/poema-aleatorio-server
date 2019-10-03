const mongoose = require("mongoose");
const { Schema } = mongoose;

const poemShema = new Schema({
  title: String,
  text: String,
  poet: { type: Schema.Types.ObjectId, ref: "poet" }
});

const poems = mongoose.model("poem", poemShema);

module.exports = poems;
