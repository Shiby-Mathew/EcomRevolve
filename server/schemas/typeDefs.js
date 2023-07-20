const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String
    password: String
    marketplaces: [Marketplace]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Marketplace {
    _id: ID
    name: String!
    description: String
    imageSrc: String!
    altText: String
    reviews: [Review]
  }
  type Review {
    _id: ID
    title: String
    reviews: String
    created_date: String
    location: String
    shipping_time: String
  }

  input ReviewInput {
    _id: ID
    title: String
    reviews: String
    created_date: String
    location: String
    shipping_time: String
  }
  type Query {
    me: User
    marketplaces: [Marketplace]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addReview(marketplaceId: ID!, newReview: ReviewInput): Marketplace
    editReview(
      marketplaceId: ID!
      reviewId: ID!
      newReview: ReviewInput
    ): Marketplace
    removeReview(marketplaceId: ID!, reviewId: ID!): Marketplace
  }
`;

module.exports = typeDefs;
