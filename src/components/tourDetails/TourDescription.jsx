import React from "react";
import Icons from "./../../img/icons.svg";
import TourGuide from "./TourGuide";

const TourDescription = ({ data }) => {
  const {
    name,
    difficulty,
    maxGroupSize,
    startDates,
    ratingsAverage,
    summary,
    guides
  } = data;
  const date = startDates ? startDates[0].substr(0, 10) : null;
  return (
    <section className="section-description">
      <div className="overview-box">
        <div>
          <div className="overview-box__group">
            <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
            <div className="overview-box__detail">
              <svg className="overview-box__icon">
                <use xlinkHref={`${Icons}#icon-calendar`} />
              </svg>
              <span className="overview-box__label">Next date</span>
              <span className="overview-box__text">{date}</span>
            </div>
            <div className="overview-box__detail">
              <svg className="overview-box__icon">
                <use xlinkHref={`${Icons}#icon-trending-up`} />
              </svg>
              <span className="overview-box__label">Difficulty</span>
              <span className="overview-box__text">{difficulty}</span>
            </div>
            <div className="overview-box__detail">
              <svg className="overview-box__icon">
                <use xlinkHref={`${Icons}#icon-user`} />
              </svg>
              <span className="overview-box__label">Participants</span>
              <span className="overview-box__text">{maxGroupSize} people</span>
            </div>
            <div className="overview-box__detail">
              <svg className="overview-box__icon">
                <use xlinkHref={`${Icons}#icon-star`} />
              </svg>
              <span className="overview-box__label">Rating</span>
              <span className="overview-box__text">{ratingsAverage} / 5</span>
            </div>
          </div>

          <div className="overview-box__group">
            <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
            {guides
              ? guides.map((guide, i) => (
                  <TourGuide key={i} guide={guide}></TourGuide>
                ))
              : null}
          </div>
        </div>
      </div>

      <div className="description-box">
        <h2 className="heading-secondary ma-bt-lg">About {name}</h2>
        <p className="description__text">{summary}</p>
      </div>
    </section>
  );
};

export default TourDescription;
