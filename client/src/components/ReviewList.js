import React from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { REMOVE_REVIEW } from "../utils/mutations";
// import { UPDATE_REVIEW } from "../utils/mutations";
import Auth from "../utils/auth";

const ReviewList = ({ markeplaceData }) => {
  console.log(markeplaceData);
  console.log(markeplaceData._id);
  console.log(markeplaceData.name);

  const [removeReview, { error }] = useMutation(REMOVE_REVIEW);
  //const [editReview, { error }] = useMutation(UPDATE_REVIEW);

  const handleDelete = async (reviewId, marketplaceId) => {
    console.log("handleDelete");
    console.log(reviewId);
    console.log(marketplaceId);

    try {
      const { data } = await removeReview({
        variables: { marketplaceId, reviewId },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="review-list">
        {markeplaceData.reviews.map((review) => (
          <div key={review._id}>
            <div className="review-item">
              <h3 className="title">{review.title}</h3>
              <p className="description">{review.review}</p>

              <p className="author">
                By: {review.author}, On: {review.created_date}
              </p>
              <div className="review-actions">
                <Link to={`/marketplace/${review._id}/edit-review`}>
                  <button disabled={!Auth.loggedIn()}>Edit Review</button>
                </Link>
                <button
                  disabled={!Auth.loggedIn()}
                  onClick={() => handleDelete(review._id, markeplaceData._id)}
                >
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
