import React, { Component } from "react";
import Joi from "@hapi/joi";
import { Redirect } from "react-router-dom";
import { forgotPassword } from "../../services/forgotPassword";

const joiSchema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net", "fr"] }
  })
});

class ForgotPassword extends Component {
  state = {
    data: {
      email: null
    },
    error: null,
    done: false,
    processing: false
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
    this.setState({ ...this.state, processing: true });
    const result = this.validation();
    if (result.error) {
      // validation error
      this.setState({ ...this.state, error: result.error.message });
      return "validation error";
    }
    // call the server
    const response = await forgotPassword(this.state.data);
    if (response.isError && response.error.response.status === 404) {
      //server error
      this.setState({
        ...this.state,
        error: "Incorrect email",
        processing: false
      });
      return "error!";
    }
    this.setState({ ...this.state, done: true, processing: false });
    return "done!";
  };

  render() {
    if (this.props.isLogged) {
      return <Redirect to="/overview"></Redirect>;
    }
    if (this.state.done) {
      return (
        <React.Fragment>
          <main className="main">
            <div className="login-form">
              <h2 className="heading-secondary ma-bt-lg">
                DONE! CHECK OUT YOUR EMAIL ADDRESS.
              </h2>
            </div>
          </main>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <main className="main">
          <div className="login-form">
            <h2 className="heading-secondary ma-bt-lg">
              You forgot your password ?
            </h2>
            <form
              onSubmit={e => this.submitHandler(e)}
              className="form form--login"
            >
              <div className="form__group ma-bt-md">
                <p className="forgotPassword">
                  {" "}
                  enter your email address and we will send you a reset link.{" "}
                </p>
              </div>
              <div className="form__group">
                <input
                  onChange={e => this.changeHandler(e)}
                  className="form__input"
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required="required"
                />
              </div>
              {this.state.error ? (
                <div className="form__group">
                  <p className="validationError">{this.state.error}</p>
                </div>
              ) : null}
              <div className="form__group">
                <button className="btn btn--green">
                  {this.state.processing ? "processing..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default ForgotPassword;
