import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer1">
      <div className="footer1__logo">
        <img
          src={"https://dztours-api.herokuapp.com/img/logo-green-small.png"}
          alt="Natours logo"
        />
      </div>
      <ul className="footer1__nav">
        <li>
          <Link to="/">About us</Link>
        </li>
        <li>
          <Link to="/">Become a guide</Link>
        </li>
        <li>
          <a href="mailto:badrouu.laabed@gmail.com">Contact</a>
        </li>
      </ul>
      <p className="footer1__copyright">
        &copy; Built with <span></span>💚 by Badreddin laabed Team.
      </p>
    </footer>
  );
};

export default Footer;
