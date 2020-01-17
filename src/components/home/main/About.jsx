import React from "react";

const About = () => {
  return (
    <section id="ABOUT" className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nulla deserunt voluptatum nam.
          </p>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Ph 1"
              className="composition__photo composition__photo--p1"
              src={require("../img/nat-1-large.jpg")}
            />

            <img
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Ph 2"
              className="composition__photo composition__photo--p2"
              src={require("../img/nat-2-large.jpg")}
            />

            <img
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Ph 3"
              className="composition__photo composition__photo--p3"
              src={require("../img/nat-3-large.jpg")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
