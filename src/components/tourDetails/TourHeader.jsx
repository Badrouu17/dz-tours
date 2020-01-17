import React from "react";
import Icons from "./../../img/icons.svg";

const TourHeader = ({ data }) => {
  const { imageCover, name, duration, startLocation } = data;
  const loca = startLocation ? startLocation.description : null;
  return (
    <section className="section-header">
      <div className="header__hero">
        <div className="header__hero-overlay">&nbsp;</div>
        <img
          className="header__hero-img"
          src={`https://dztours-api.herokuapp.com/img/tours/${
            imageCover ? imageCover : "tour-1-cover.jpg"
          }`}
          alt="Tour 5"
        />
      </div>
      <div className="heading-box">
        <h1 className="heading-primary1">
          <span>{name}</span>
        </h1>
        <div className="heading-box__group">
          <div className="heading-box__detail">
            <svg className="heading-box__icon">
              <use xlinkHref={`${Icons}#icon-clock`} />
            </svg>
            <span className="heading-box__text">{duration} days</span>
          </div>
          <div className="heading-box__detail">
            <svg className="heading-box__icon">
              <use xlinkHref={`${Icons}#icon-map-pin`} />
            </svg>
            <span className="heading-box__text">{loca}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourHeader;
