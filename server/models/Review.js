const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  reviews: {
    type: String,
    required: true,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
  },
  shipping_time: {
    type: String,
  },
  // marketplaces: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Marketplace",
  //   },
  // ],
  // user: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  // ],
});

const Review = model("Review", reviewSchema);

module.exports = Review;
