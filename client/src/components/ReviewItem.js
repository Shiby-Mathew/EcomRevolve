import React from "react";
// import "./ReviewItem.css";

function ReviewItem({ review }) {
  return (
    <div className="review-item">
      <h3 className="title">{review.title}</h3>
      <p className="description">{review.review}</p>

      <p className="author">
        By: {review.author} On: {review.created_date}
      </p>
    </div>
  );
}

export default ReviewItem;
