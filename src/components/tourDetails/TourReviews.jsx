import React from "react";
import ReviewCard from "./ReviewCard";

const TourReviews = ({ data }) => {
  const { reviews } = data;
  return (
    <section className="section-reviews">
      <div className="reviews">
        {reviews
          ? reviews.map((theReview, i) => (
              <ReviewCard key={i} theReview={theReview}></ReviewCard>
            ))
          : null}
      </div>
    </section>
  );
};

export default TourReviews;
