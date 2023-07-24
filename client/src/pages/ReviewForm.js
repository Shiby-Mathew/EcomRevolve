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
    console.log(review, title);

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

      window.location.reload();
      navigate(-1);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <form onSubmit={handleSubmit}>
          <div className="review-container">
            <h2>Title:</h2>
            <input
              className="input"
              value={title}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              type="title"
              placeholder="Please enter a title"
            />

            <h2>Add your review:</h2>
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
        <p>
          You need to be logged in to add reviews. Please{" "}
          <Link to="/login">login</Link> or{" "}
          <Link to="/register">Register.</Link>
        </p>
      )}
    </div>
  );
};

export default ReviewForm;
