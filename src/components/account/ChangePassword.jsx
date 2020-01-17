import React, { Component } from "react";
import Joi from "@hapi/joi";
import { updatePassword } from "./../../services/account";

import { toast } from "react-toastify";

const joiSchema = Joi.object({
  currentPassword: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

  newPassword: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

  newPasswordConfirm: Joi.ref("newPassword")
});

class ChangePassword extends Component {
  state = {
    data: {
      currentPassword: null,

      newPassword: null,

      newPasswordConfirm: null
    },
    error: null,
    saving: null
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
    this.setState({ ...this.state, saving: true });
    const result = this.validation();
    if (result.error) {
      // validation error
      this.setState({ ...this.state, error: result.error.message });
      return "validation error";
    }
    // call the server
    const response = await updatePassword(this.state.data);
    console.log(response);
    if (response.isError && response.error.response.status === 500) {
      //server error
      this.setState({
        ...this.state,
        error: "something went wrong! please try later"
      });
      return "error!";
    }

    // change the token
    localStorage.setItem("token", response.data.token);
    toast.success("changed successfully", { className: "toastify" });
    this.setState({ ...this.state, saving: false });
    return "sended to the server!";
  };

  render() {
    return (
      <div className="user-view__form-container">
        <h2 className="heading-secondary ma-bt-md">Password change</h2>
        <form
          onSubmit={e => this.submitHandler(e)}
          className="form form-user-settings"
        >
          <div className="form__group">
            <label className="form__label" htmlFor="password-current">
              Current password
            </label>
            <input
              onChange={e => this.changeHandler(e)}
              className="form__input"
              id="currentPassword"
              type="password"
              placeholder="••••••••"
              required="required"
              minLength="8"
            />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="password">
              New password
            </label>
            <input
              onChange={e => this.changeHandler(e)}
              className="form__input"
              id="newPassword"
              type="password"
              placeholder="••••••••"
              required="required"
              minLength="8"
            />
          </div>
          <div className="form__group ma-bt-lg">
            <label className="form__label" htmlFor="password-confirm">
              Confirm password
            </label>
            <input
              onChange={e => this.changeHandler(e)}
              className="form__input"
              id="newPasswordConfirm"
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
          <div className="form__group right">
            <button className="btn btn--small btn--green">
              {this.state.saving ? "saving..." : "Save password"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ChangePassword;
