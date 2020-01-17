import React, { Component } from "react";
import Header from "./../Header";
import TourCard from "./TourCard";
import tour from "./../../services/tour";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";

class Overview extends Component {
  state = {
    tours: null,
    error: null,
    loading: null
  };

  async componentDidMount() {
    this.setState({ ...this.state, loading: true });
    const response = await tour.getAllTours();
    if (response.isError) {
      //server error
      this.setState({ error: true });
      return "error";
    }
    this.setState({
      tours: response.data.data.data,
      error: false,
      loading: false
    });
  }

  render() {
    if (this.state.error) {
      return <Redirect to="/error"></Redirect>;
    }
    return (
      <React.Fragment>
        <Header></Header>
        {this.state.loading ? (
          <div className="loader">
            <Loader
              type="Oval"
              color="#20bf6b"
              height={150}
              width={150}
            ></Loader>
          </div>
        ) : (
          <main className="main">
            <div className="card-container">
              {this.state.tours
                ? this.state.tours.map(tour => (
                    <TourCard key={tour._id} tourData={tour}></TourCard>
                  ))
                : null}
            </div>
          </main>
        )}
      </React.Fragment>
    );
  }
}

export default Overview;
