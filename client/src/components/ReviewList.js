import React, { useState } from "react";

import { useMutation } from "@apollo/client";

import { REMOVE_REVIEW } from "../utils/mutations";
//import Auth from "../utils/auth";

const ReviewList = ({ markeplaceData }) => {
  console.log(markeplaceData);
  console.log(markeplaceData._id);
  console.log(markeplaceData.name);

  // const [removeReview, { error }] = useMutation(REMOVE_REVIEW);
  //const [editReview, { error }] = useMutation(UPDATE_REVIEW);

  const handleDelete = async (reviewId) => {
    console.log("handleDelete");
    console.log(reviewId);
  };

  const handleEdit = async (e) => {
    console.log("handleEdit");
  };

  return (
    <div>
      <div className="review-list">
        {markeplaceData.reviews.map((review) => (
          <div>
            <div className="review-item">
              <h3 className="title">{review.title}</h3>
              <p className="description">{review.review}</p>

              <p className="author">
                By: {review.author}, On: {review.created_date}
              </p>
              <div className="review-actions">
                <button onClick={() => handleEdit(review._id)}>
                  Edit Review
                </button>
                <button onClick={() => handleDelete(review._id)}>
                  Delete Review
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
