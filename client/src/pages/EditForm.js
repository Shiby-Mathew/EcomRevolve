import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_REVIEW } from "../utils/queries";
import { UPDATE_REVIEW } from "../utils/mutations";
import Auth from "../utils/auth";

const EditForm = () => {
  const { reviewId } = useParams();

  //const navigate = useNavigate();

  const { loading, data } = useQuery(QUERY_REVIEW, {
    // pass URL parameter
    variables: { reviewId: reviewId },
  });

  const [state, setState] = useState({});

  useEffect(() => {
    if (!loading && data) {
      setState({
        title: data.reviews.title,
        review: data.reviews.review,
      });
    }
  }, [loading, data]);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="review-container">
          <h2>Title</h2>
          <input
            className="input"
            value={state.title}
            name="title"
            onChange={handleChange}
            type="title"
          />

          <h2>Edit your review</h2>
          <textarea
            className="review-textarea"
            value={state.review}
            name="review"
            onChange={handleChange}
          ></textarea>
          <a href="#" onClick={handleSubmit} className="submit-review-button">
            Confirm your review
          </a>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
