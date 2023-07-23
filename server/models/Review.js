const { Schema, model } = require("mongoose");

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
  },

  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Review = model("Review", reviewSchema);

module.exports = Review;
