const { Schema, model } = require("mongoose");
const reviewSchema = require("./Review");

const marketplaceSchema = new Schema({
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
  officalname: {
    type: String,
  },
  link: {
    type: String,
  },

  shippingTime: {
    type: String,
  },
  productCategories: [
    {
      type: String,
    },
  ],
  services: [
    {
      type: String,
    },
  ],
  reviews: [reviewSchema],
});
const Marketplace = model("Marketplace", marketplaceSchema);

module.exports = Marketplace;
