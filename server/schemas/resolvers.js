const { AuthenticationError } = require("apollo-server-express");
const { User, Marketplace, Review } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    marketplaces: async () => {
      //console.log("market places");
      return Marketplace.find().populate("reviews");
    },
    viewReview: async (parent, { marketplaceId }) => {
      //console.log("reviews");
      return Marketplace.findOne({ _id: marketplaceId }).populate("reviews");
    },
    reviews: async (parent, { reviewId }) => {
      console.log("reviews");
      return Review.findOne({ _id: reviewId });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      console.log(" inside login");
      const user = await User.findOne({ email });
      console.log(user);

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);

      return { token, user };
    },

    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      console.log(user);

      const token = signToken(user);

      return { token, user };
    },

    // Add review and update marketplace

    addReview: async (parent, { marketplaceId, newReview }, context) => {
      if (context.user) {
        const review = await Review.create({ ...newReview });

        await Marketplace.findOneAndUpdate(
          { _id: marketplaceId },
          { $addToSet: { reviews: review._id } }
        );

        return review;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeReview: async (parent, { marketplaceId, reviewId }, context) => {
      if (context.user) {
        const review = await Review.findOneAndDelete({
          _id: reviewId,
        });
        await Marketplace.findOneAndUpdate(
          { _id: marketplaceId },
          { $pull: { reviews: reviewId } },
          { new: true }
        );

        return review;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    editReview: async (parent, { reviewId, updatedReview }, context) => {
      if (context.user) {
        const updateReview = await Review.findOneAndUpdate(
          { _id: reviewId },
          { $set: updatedReview },
          { runValidators: true, new: true }
        );

        return updateReview;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};
module.exports = resolvers;
