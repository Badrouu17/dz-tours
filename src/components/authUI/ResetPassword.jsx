import React, { Component } from "react";

import Joi from "@hapi/joi";
import { Redirect } from "react-router-dom";
import { resetPassword } from "../../services/forgotPassword";
import auth from "./../../services/auth";

const joiSchema = Joi.object({
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

  passwordConfirm: Joi.ref("password")
});

class ResetPassword extends Component {
  state = {
    data: {
      password: null,
      passwordConfirm: null
    },
    error: null
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
    const result = this.validation();
    if (result.error) {
      // validation error
      this.setState({ ...this.state, error: result.error.message });
      return "validation error";
    }
    // call the server
    const response = await resetPassword(
      this.state.data,
      this.props.match.params.token
    );
    if (response.isError) {
      //server error
      this.setState({
        ...this.state,
        error: "server error! please try later."
      });
      return "error!";
    }

    // change the token
    console.log(response);
    auth.storeTheUser(response.data.token, response.data.data.user);
    window.location = "/overview";

    return "done!";
  };

  render() {
    if (this.props.isLogged) {
      return <Redirect to="/overview"></Redirect>;
    }

    return (
      <React.Fragment>
        <main className="main">
          <div className="login-form">
            <h2 className="heading-secondary ma-bt-lg">reset your password</h2>
            <form
              onSubmit={e => this.submitHandler(e)}
              className="form form--login"
            >
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
                <label className="form__label" htmlFor="password">
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
                <button className="btn btn--green">Send</button>
              </div>
            </form>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default ResetPassword;
