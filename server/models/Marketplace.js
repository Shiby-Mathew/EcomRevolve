const { Schema, model } = require("mongoose");
const reviewSchema = require("./Review");

const marketplaceSchema = new Schema({
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
const Marketplace = model("Marketplace", marketplaceSchema);

module.exports = Marketplace;
