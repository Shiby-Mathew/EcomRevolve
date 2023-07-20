const { Schema, model } = require("mongoose");

const listSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  imageSrc: {
    type: String,
  },
  altText: {
    type: String,
  },
});
const List = model("List", listSchema);

module.exports = List;
