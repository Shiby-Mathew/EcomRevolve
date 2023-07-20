const { AuthenticationError } = require("apollo-server-express");
const { User,Marketplace } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    marketplaces: async () => {
      return Marketplace.find();
    },

    lists: async () => {
      console.log("inside the lists");

      return List.find();
      // console.log(value);
      //
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
  },
};
module.exports = resolvers;
