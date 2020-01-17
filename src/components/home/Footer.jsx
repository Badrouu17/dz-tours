import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo"></picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Carrers
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Privacy policy
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Copyright &copy; Built by{" "}
            <a href="/" class="footer__link">
              Baderddin Laabed
            </a>
            , Design by Jonas Schmedtmann.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
