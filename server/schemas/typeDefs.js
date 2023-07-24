const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Marketplace {
    _id: ID
    name: String!
    imageSrc: String
    altText: String
    reviews: [Review]
  }

  type Review {
    _id: ID
    title: String
    review: String
    created_date: String
    author: String
  }

  input ReviewInput {
    title: String
    review: String
    created_date: String
    author: String
  }
  type Query {
    me: User
    marketplaces: [Marketplace]
    viewReview(marketplaceId: ID!): Marketplace
    editreviews(reviewId: ID!): Review
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

    addReview(marketplaceId: ID!, newReview: ReviewInput): Review

    editReview(reviewId: ID!, updatedReview: ReviewInput): Review

    removeReview(marketplaceId: ID!, reviewId: ID!): Review
  }
`;

module.exports = typeDefs;
