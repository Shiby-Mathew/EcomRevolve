import React from "react";
// import "./ReviewItem.css";

function ReviewItem({ review }) {
  console.log(review);
  return (
    <div className="review-item">
      <h3 className="title">{review.title}</h3>
      <p className="description">{review.review}</p>
      <p className="author"> {review.location}</p>
      {/* <p className="author">By: {review.author}</p> */}
    </div>
  );
}

export default ReviewItem;
