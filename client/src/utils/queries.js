import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      password
    }
  }
`;

export const QUERY_MARKETPLACES = gql`
  query marketplaces {
    marketplaces {
      _id
      name      
      imageSrc
      altText
    }
  }
`;

// export const QUERY_MARKETPLACES = gql`
//   query me {
//     marketplaces {
//       _id
//       name
//       description
//     }
//   }
// `;
