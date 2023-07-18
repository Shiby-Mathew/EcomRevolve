import React from "react";
// import "./ReviewItem.css";

function ReviewItem({ review }) {
  return (
    <div className="review-item">
      <h3 className="title">{review.title}</h3>
      <p className="description">{review.description}</p>
      <p className="author">By: {review.author}</p>
    </div>
  );
}

export default ReviewItem;
