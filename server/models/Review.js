const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reviewSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  review: {
    type: String,
    required: true,
  },
  created_date: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  author: {
    type: String,
    required: true,
  },
});

const Review = model("Review", reviewSchema);

module.exports = Review;
