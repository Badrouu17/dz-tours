import React, { Component } from "react";
// import { bookTour } from "./../../services/bookTourWithStripe";
import { Redirect } from "react-router-dom";

class TourCta extends Component {
  state = {
    loading: false,
    stripe: null,
    error: null
  };

  // componentDidMount() {
  //   if (window.Stripe) {
  //     this.setState({
  //       ...this.state,
  //       stripe: window.Stripe("pk_test_Pv1zbmGlCQromCS7S2vtPQP600FwakwDgE")
  //     });
  //   } else {
  //     document.querySelector("#stripe-js").addEventListener("load", () => {
  //       this.setState({
  //         ...this.state,
  //         stripe: window.Stripe("pk_test_Pv1zbmGlCQromCS7S2vtPQP600FwakwDgE")
  //       });
  //     });
  //   }
  // }

  book = async id => {
    this.setState({ ...this.state, loading: true });
    // await bookTour(id, this.state.stripe);
    this.setState({ ...this.state, error: true });
  };

  render() {
    if (this.state.error) {
      return <Redirect to="/error"></Redirect>;
    }

    const { _id, duration, images } = this.props.data;

    const id = _id ? _id : null;

    const img0 = images ? images[0] : null;
    const img1 = images ? images[1] : null;

    return (
      <section className="section-cta">
        <div className="cta">
          <div className="cta__img cta__img--logo">
            <img
              src={"https://dztours-api.herokuapp.com/img/logo-white.png"}
              alt="Natours logo"
              className=""
            />
          </div>
          <img
            src={`https://dztours-api.herokuapp.com/img/tours/${
              img0 ? img0 : "tour-1-1.jpg"
            }`}
            alt=""
            className="cta__img cta__img--1"
          />
          <img
            src={`https://dztours-api.herokuapp.com/img/tours/${
              img1 ? img1 : "tour-1-2.jpg"
            }`}
            alt=""
            className="cta__img cta__img--2"
          />

          <div className="cta__content">
            <h2 className="heading-secondary">What are you waiting for?</h2>
            <p className="cta__text">
              {duration} days. 1 adventure. Infinite memories. Make it yours
              today!
            </p>
            <button
              onClick={() => this.book(id)}
              className="btn btn--green span-all-rows"
            >
              {this.state.loading ? "loading..." : "Book tour now!"}
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default TourCta;
