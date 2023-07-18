const { Schema } = require("mongoose");

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

  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = reviewSchema;
