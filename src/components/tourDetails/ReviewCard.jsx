import React from "react";
import Icons from "./../../img/icons.svg";

const ReviewCard = ({ theReview }) => {
  const { id, review, rating, user } = theReview;
  var array = [];
  for (let i = 0; i < Math.round(rating); i++) {
    array.push(i);
  }
  const userPhoto = user ? user.photo : null;
  const userName = user ? user.name : null;
  return (
    <div id={id} className="reviews__card">
      <div className="reviews__avatar">
        <img
          src={`https://dztours-api.herokuapp.com/img/users/${userPhoto}`}
          alt="Jim Brown"
          className="reviews__avatar-img"
        />
        <h6 className="reviews__user">{userName}</h6>
      </div>
      <p className="reviews__text">{review}</p>
      <div className="reviews__rating">
        {array.map((e, i) => (
          <svg key={i} className="reviews__star reviews__star--active">
            <use xlinkHref={`${Icons}#icon-star`} />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
