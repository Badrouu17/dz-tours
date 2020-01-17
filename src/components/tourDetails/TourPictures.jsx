import React from "react";

const TourPictures = ({ data }) => {
  const { images } = data;
  const img0 = images ? images[0] : null;
  const img1 = images ? images[1] : null;
  const img2 = images ? images[2] : null;

  return (
    <section className="section-pictures">
      <div className="picture-box">
        <img
          className="picture-box__img picture-box__img--1"
          src={`https://dztours-api.herokuapp.com/img/tours/${
            img0 ? img0 : "tour-1-1.jpg"
          }`}
          alt="The Park Camper Tour 1"
        />
      </div>
      <div className="picture-box">
        <img
          className="picture-box__img picture-box__img--2"
          src={`https://dztours-api.herokuapp.com/img/tours/${
            img1 ? img1 : "tour-1-2.jpg"
          }`}
          alt="The Park Camper Tour 1"
        />
      </div>
      <div className="picture-box">
        <img
          className="picture-box__img picture-box__img--3"
          src={`https://dztours-api.herokuapp.com/img/tours/${
            img2 ? img2 : "tour-1-3.jpg"
          }`}
          alt="The Park Camper Tour 1"
        />
      </div>
    </section>
  );
};

export default TourPictures;
