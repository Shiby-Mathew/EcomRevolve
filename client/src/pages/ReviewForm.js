import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_REVIEW } from "../utils/mutations";
import Auth from "../utils/auth";

const ReviewForm = () => {
  const { marketplaceId } = useParams();
  const [review, setReview] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const [addReview, { error }] = useMutation(ADD_REVIEW);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const reviewData = await addReview({
        variables: {
          marketplaceId,
          newReview: {
            title,
            review,
            author: Auth.getProfile().data.username,
          },
        },
      });

      setTitle("");
      setReview("");

      navigate(-1);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <form onSubmit={handleSubmit}>
          <div className="review-container">
            <h2>Review Title</h2>
            <input
              className="input"
              value={title}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              type="title"
              placeholder="Please enter a title"
            />

            <h2>Your Review Content</h2>
            <textarea
              className="review-textarea"
              value={review}
              name="review"
              placeholder="Please enter a comment"
              onChange={(e) => setReview(e.target.value)}
              required
            ></textarea>
            <a href="#" onClick={handleSubmit} className="submit-review-button">
              Submit Review
            </a>
          </div>
        </form>
      ) : (
        <p className="review-message">
          You need to be logged in to add reviews. Please{" "}
          <a href="/login">Login</a> or <a href="/register">Register</a>.
        </p>
      )}
    </div>
  );
};

export default ReviewForm;
