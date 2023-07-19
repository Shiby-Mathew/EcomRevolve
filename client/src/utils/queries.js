import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      username
    }
  }
`;

export const QUERY_MARKETPLACES = gql`
  query me {
    marketplaces {
      _id
      name
      description
    }
  }
`;
