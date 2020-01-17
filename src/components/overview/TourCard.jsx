import React from "react";
import { Link } from "react-router-dom";

import Icons from "./../../img/icons.svg";

const TourCard = ({ tourData }) => {
  const {
    _id,
    name,
    price,
    summary,
    imageCover,
    duration,
    maxGroupSize,
    difficulty,
    ratingsAverage,
    startLocation,
    locations,
    startDates
  } = tourData;
  return (
    <div className="card" id={_id}>
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay">&nbsp;</div>
          <img
            src={`https://dztours-api.herokuapp.com/img/tours/${imageCover}`}
            alt="Tour 1"
            className="card__picture-img"
          />
        </div>

        <h3 className="heading-tertirary">
          <span>{name}</span>
        </h3>
      </div>

      <div className="card__details1">
        <h4 className="card__sub-heading">
          {`${difficulty} ${duration}`}-day tour
        </h4>
        <p className="card__text">{summary}</p>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref={`${Icons}#icon-map-pin`} />
          </svg>
          <span>{startLocation.description}</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref={`${Icons}#icon-calendar`} />
          </svg>
          <span>{startDates[0].substr(0, 10)}</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref={`${Icons}#icon-flag`} />
          </svg>
          <span>{locations.length} stops</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref={`${Icons}#icon-user`} />
          </svg>
          <span>{maxGroupSize} people</span>
        </div>
      </div>

      <div className="card__footer">
        <p>
          <span className="card__footer-value">${price} </span>
          <span className="card__footer-text">per person</span>
        </p>
        <p className="card__ratings">
          <span className="card__footer-value">{ratingsAverage} </span>
          <span className="card__footer-text">rating (21)</span>
        </p>
        <Link to={`/tour/${_id}`} className="btn btn--green btn--small">
          Details
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
