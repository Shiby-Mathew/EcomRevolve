const { Schema, model } = require("mongoose");
const reviewSchema = require("./Review");

const brandSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  reviews: [reviewSchema],
});
const Brand = model("Brand", brandSchema);

module.exports = Brand;
