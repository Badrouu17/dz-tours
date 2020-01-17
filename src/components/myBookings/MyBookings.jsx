import React, { Component } from "react";
import Header from "../Header";
import MyBookingTourCard from "./MyBookingTourCard";

import tour from "../../services/tour";
import { Redirect } from "react-router-dom";

class MyBooking extends Component {
  state = {
    tours: null,
    error: null
  };

  async componentDidMount() {
    const response = await tour.getMyTours();
    if (response.isError) {
      //server error
      this.setState({ error: true });
      return "error";
    }
    this.setState({ tours: response.data.data.tours, error: false });
  }

  render() {
    if (this.state.error) {
      return <Redirect to="/error"></Redirect>;
    }
    return (
      <React.Fragment>
        <Header></Header>
        <main className="main">
          {this.state.tours && this.state.tours.length === 0 && (
            <div className="noBookings">
              <span>No bookings yet</span>
            </div>
          )}
          <div className="card-container">
            {this.state.tours &&
              this.state.tours.map(tour => (
                <MyBookingTourCard
                  key={tour._id}
                  tourData={tour}
                ></MyBookingTourCard>
              ))}
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default MyBooking;
