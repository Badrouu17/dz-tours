import React, { Component } from "react";
import { Link } from "react-router-dom";

import Icons from "./../../img/icons.svg";
import Header from "./../Header";
import ChangePassword from "./ChangePassword";
import UploadPhoto from "./UploadPhoto";

import { updateMe } from "./../../services/account";
import { ToastContainer, toast } from "react-toastify";

class Account extends Component {
  state = {
    saving: null,
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    this.setState({ user });
  }

  changeHandler = (e) => {
    const { id, value } = e.target;
    this.setState({
      ...this.state,
      user: { ...this.state.user, [id]: value },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ ...this.state, saving: true });
    const form = new FormData();
    form.append("name", this.state.user.name);
    form.append("email", this.state.user.email);

    const response = await updateMe(form);

    localStorage.setItem("user", JSON.stringify(response.data.data.user));
    toast.success("changed successfully", {
      className: "toastify",
      onClose: () => window.location.reload(),
    });

    this.setState({ ...this.state, saving: false });
  };

  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <main className="main">
          <div className="user-view">
            <nav className="user-view__menu">
              <ul className="side-nav">
                <li className="side-nav--active">
                  <Link to="/account">
                    <svg>
                      <use xlinkHref={`${Icons}#icon-settings`} />
                    </svg>
                    Settings
                  </Link>
                </li>
                <li>
                  <Link to="/my-bookings">
                    <svg>
                      <use xlinkHref={`${Icons}#icon-briefcase`} />
                    </svg>
                    My bookings
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="user-view__content">
              <div className="user-view__form-container">
                <h2 className="heading-secondary ma-bt-md">
                  Your account settings
                </h2>
                <form
                  onSubmit={(e) => this.handleSubmit(e)}
                  className="form form-user-data"
                  encType="multipart/form-data"
                >
                  <div className="form__group">
                    <label className="form__label" htmlFor="name">
                      Name
                    </label>
                    <input
                      onChange={(e) => this.changeHandler(e)}
                      className="form__input"
                      id="name"
                      type="text"
                      value={(this.state.user && this.state.user.name) || ""}
                      required="required"
                    />
                  </div>
                  <div className="form__group ma-bt-md">
                    <label className="form__label" htmlFor="email">
                      Email address
                    </label>
                    <input
                      onChange={(e) => this.changeHandler(e)}
                      className="form__input"
                      id="email"
                      type="email"
                      value={(this.state.user && this.state.user.email) || ""}
                      required="required"
                    />
                  </div>
                  <div className="form__group right">
                    <button className="btn btn--small btn--green">
                      {this.state.saving ? "saving..." : "Save settings"}
                    </button>
                  </div>
                </form>
              </div>
              <div className="line">&nbsp;</div>
              <UploadPhoto user={this.state.user}></UploadPhoto>
              <div className="line">&nbsp;</div>
              <ChangePassword></ChangePassword>
            </div>
          </div>
        </main>
        <ToastContainer />
      </React.Fragment>
    );
  }
}

export default Account;
