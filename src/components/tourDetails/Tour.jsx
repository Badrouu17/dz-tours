import React, { Component } from "react";
import Header from "./../Header";

import TourHeader from "./TourHeader";
import TourDescription from "./TourDescription";
import TourPictures from "./TourPictures";
import TourMap from "./TourMap";
import TourReviews from "./TourReviews";
import TourCta from "./TourCta";
import tour from "./../../services/tour";
import { Redirect } from "react-router-dom";

class Tour extends Component {
  state = {
    tour: null,
    error: null
  };

  async componentDidMount() {
    const response = await tour.getTour(this.props.match.params.id);
    if (response.isError) {
      //server error
      this.setState({ error: true });
      return "error";
    } else {
      this.setState({ tour: response.data.data.data, error: false });
    }
  }

  render() {
    if (this.state.error) {
      return <Redirect to="/error"></Redirect>;
    }

    if (this.state.tour) {
      var {
        name,
        _id,
        summary,
        imageCover,
        duration,
        maxGroupSize,
        difficulty,
        ratingsAverage,
        startLocation,
        locations,
        startDates,
        guides,
        reviews,
        images
      } = this.state.tour;
    }
    return (
      <React.Fragment>
        <Header></Header>
        <TourHeader
          data={{ imageCover, name, duration, startLocation }}
        ></TourHeader>
        <TourDescription
          data={{
            name,
            difficulty,
            maxGroupSize,
            startDates,
            ratingsAverage,
            summary,
            guides
          }}
        ></TourDescription>
        <TourPictures
          data={{
            images
          }}
        ></TourPictures>
        <TourMap data={{ locations }}></TourMap>
        <TourReviews
          data={{
            reviews
          }}
        ></TourReviews>
        <TourCta
          data={{
            _id,
            duration,
            images
          }}
        ></TourCta>
      </React.Fragment>
    );
  }
}

export default Tour;
