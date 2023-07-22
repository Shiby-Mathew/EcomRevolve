const { AuthenticationError } = require("apollo-server-express");
const { User, Marketplace, Review } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    marketplaces: async () => {
      console.log("market places");
      return Marketplace.find();
    },
    reviews: async () => {
      console.log("reviews");
      return Review.find();
    },
    // reviews: async (parent,{marketplaceId}) => {
    //   console.log("reviews");
    //   return Marketplace.findOne(name:marketplaceId);
    // },

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
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);

      return { token, user };
    },

    addUser: async (parent, { username, email, password }) => {
      console.log(" inside");
      const user = await User.create({ username, email, password });
      console.log(user);

      const token = signToken(user);

      return { token, user };
    },

    // Add review and update marketplace

    // addReview: async (parent, { marketplaceId, newReview }) => {
    //   console.log("inside add review");
    //   console.log(marketplaceId);
    //   console.log(newReview);
    //   const review = await Review.create({ newReview });
    //   console.log("newReview");
    //   console.log("review" + review);
    //   await Marketplace.findOneAndUpdate(
    //     { _id: marketplaceId },
    //     { $addToSet: { reviews: review._id } }
    //   );
    //   console.log(review);
    //   return review;
    // },

    // addReview: async (parent, { newReview }) => {
    //   console.log("inside add review");
    //   console.log();
    //   console.log(newReview);
    //   const review = await Review.create({ newReview });
    //   console.log(review);
    // },
  },
};
module.exports = resolvers;
