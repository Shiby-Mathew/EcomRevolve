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

  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],


});

module.exports = reviewSchema;
