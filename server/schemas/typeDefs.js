const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
  }
  type Auth {
    token: ID!
    user: User
  }

  type List {
    _id: ID
    name: String!
    imageSrc: String!
    altText: String
  }
  type Marketplace {
    _id: ID
    name: String!
    description: String!
  }

  type Query {
    me: User
    marketplaces: [Marketplace]
    lists: [List]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
