import React from "react";

const TourGuide = ({ guide }) => {
  const { name, photo, role, _id } = guide;
  return (
    <div id={_id} className="overview-box__detail">
      <img
        src={`https://dztours-api.herokuapp.com/img/users/${photo}`}
        alt="Lead guide"
        className="overview-box__img"
      />
      <span className="overview-box__label">{role}</span>
      <span className="overview-box__text">{name}</span>
    </div>
  );
};

export default TourGuide;
