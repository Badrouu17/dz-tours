import React, { Component } from "react";
import auth from "./../services/auth";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    const user = auth.getTheUserFromStorage();
    this.setState({ user });
  }

  render() {
    return (
      <header className="header1">
        <nav className="nav nav--tours">
          {this.state.user ? (
            <Link to="/overview" className="nav__el">
              All tours
            </Link>
          ) : null}
        </nav>
        <div className="header1__logo">
          <img
            src={"https://dztours-api.herokuapp.com/img/logo-white.png"}
            alt="Natours logo"
          />
        </div>
        <nav className="nav nav--user">
          {this.state.user ? (
            <React.Fragment>
              <button
                onClick={() => {
                  auth.deleteTheUserAndTokenFromStorage();
                  window.location = "/login";
                }}
                className="nav__el"
              >
                Log out
              </button>
              <Link to="/account" className="nav__el">
                <img
                  src={`https://dztours-api.herokuapp.com/img/users/${
                    this.state.user ? this.state.user.photo : "default.jpg"
                  }`}
                  alt="u"
                  className="nav__user-img"
                />
                <span>{this.state.user.name}</span>
              </Link>
            </React.Fragment>
          ) : null}
          {!this.state.user ? (
            <React.Fragment>
              {" "}
              <Link to="/login" className="nav__el">
                Log in
              </Link>
              <Link to="/signup" className="nav__el nav__el--cta">
                Sign up
              </Link>
            </React.Fragment>
          ) : null}
        </nav>
      </header>
    );
  }
}

export default Header;
