import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

// need to complete token**********
export const ADD_REVIEW = gql`
  mutation addReview($marketplaceId: ID!, $newReview: ReviewInput!) {
    addReview(marketplaceId: $marketplaceId, newReview: $newReview) {
      _id
      title
      review
      created_date
      author
    }
  }
`;

export const UPDATE_REVIEW = gql`
  mutation editReview($reviewId: ID!, $updatedReview: ReviewInput!) {
    editReview(reviewId: $reviewId, updatedReview: $updatedReview) {
      _id
      title
      review
      created_date
      author
    }
  }
`;

export const REMOVE_REVIEW = gql`
  mutation removeReview($marketplaceId: ID!, $reviewId: ID!) {
    removeReview(marketplaceId: $marketplaceId, reviewId: $reviewId) {
      _id
      review
      author
    }
  }
`;
