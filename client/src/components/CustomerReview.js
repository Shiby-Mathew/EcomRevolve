import React from "react";
import "./CustomerReview.css";

function CustomerReview({ review, isLoggedIn }) {
  const handleEdit = () => {
    // Edit review logic
  };

  const handleDelete = () => {
    // Delete review logic
  };

  return (
    <div className="customer-review">
      <div className="review-details">
        <p>Date: {review.date}</p>
        <p>Location: {review.location}</p>
        <p>Items Purchased: {review.itemCount}</p>
      </div>
      <div className="review-content">
        <p>{review.comment}</p>
        {isLoggedIn ? (
          <div className="review-actions">
            <button onClick={handleEdit}>Edit Review</button>
            <button onClick={handleDelete}>Delete Review</button>
          </div>
        ) : (
          <p>Please log in to review</p>
        )}
      </div>
    </div>
  );
}

export default CustomerReview;
