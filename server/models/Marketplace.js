const { Schema, model } = require("mongoose");
// const reviewSchema = require("./Review");

const marketplaceSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  imageSrc: {
    type: String,
  },
  altText: {
    type: String,
  },
  reviews: [
    {
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
    },
  ],
});
const Marketplace = model("Marketplace", marketplaceSchema);

module.exports = Marketplace;
