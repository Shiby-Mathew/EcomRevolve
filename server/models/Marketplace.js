const { Schema, model } = require("mongoose");
//const reviewSchema = require("./Review");

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
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
});
const Marketplace = model("Marketplace", marketplaceSchema);

module.exports = Marketplace;
