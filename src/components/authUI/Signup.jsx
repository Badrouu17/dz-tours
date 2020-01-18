import React, { Component } from "react";
import Header from "./../Header";
import Joi from "@hapi/joi";
import auth from "./../../services/auth";
import { Redirect } from "react-router-dom";

const joiSchema = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(15)
    .required(),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

  passwordConfirm: Joi.ref("password"),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net", "fr"] }
  })
});

class Signup extends Component {
  state = {
    data: {
      name: null,
      email: null,
      password: null,
      passwordConfirm: null
    },
    error: null,
    signing: false
  };

  changeHandler = e => {
    const { id, value } = e.target;
    this.setState({
      ...this.state,
      data: { ...this.state.data, [id]: value }
    });
  };

  validation = () => {
    return joiSchema.validate(this.state.data);
  };

  submitHandler = async e => {
    e.preventDefault();
    this.setState({ ...this.state, signing: true });
    const result = this.validation();
    if (result.error) {
      // validation error
      this.setState({ ...this.state, error: result.error.message });
      return "validation error";
    }
    // call the server
    const response = await auth.signUp(this.state.data);
    if (response.isError) {
      //server error
      this.setState({ ...this.state, error: "server error!", signing: false });
      return "error!";
    }
    auth.storeTheUser(response.data.token, response.data.data.user);
    this.setState({ ...this.state, signing: false });
    window.location = "/overview";
    return "sended to the server!";
  };

  render() {
    if (this.props.isLogged) {
      return <Redirect to="/overview"></Redirect>;
    }
    return (
      <React.Fragment>
        <Header></Header>
        <main className="main">
          <div className="login-form">
            <h2 className="heading-secondary ma-bt-lg">SIGNUP</h2>
            <form
              onSubmit={e => this.submitHandler(e)}
              className="form form--login"
            >
              <div className="form__group">
                <label className="form__label" htmlFor="name">
                  name
                </label>
                <input
                  onChange={e => this.changeHandler(e)}
                  className="form__input"
                  id="name"
                  type="text"
                  placeholder="your name"
                  required="required"
                />
              </div>
              <div className="form__group">
                <label className="form__label" htmlFor="email">
                  Email address
                </label>
                <input
                  onChange={e => this.changeHandler(e)}
                  className="form__input"
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required="required"
                />
              </div>
              <div className="form__group ma-bt-md">
                <label className="form__label" htmlFor="password">
                  Password
                </label>
                <input
                  onChange={e => this.changeHandler(e)}
                  className="form__input"
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required="required"
                  minLength="8"
                />
              </div>
              <div className="form__group ma-bt-md">
                <label className="form__label" htmlFor="passwordConfirm">
                  Confirm Password
                </label>
                <input
                  onChange={e => this.changeHandler(e)}
                  className="form__input"
                  id="passwordConfirm"
                  type="password"
                  placeholder="••••••••"
                  required="required"
                  minLength="8"
                />
              </div>
              {this.state.error ? (
                <div className="form__group">
                  <p className="validationError">{this.state.error}</p>
                </div>
              ) : null}
              <div className="form__group">
                <button className="btn btn--green">
                  {this.state.signing ? "signing..." : "signup"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Signup;
