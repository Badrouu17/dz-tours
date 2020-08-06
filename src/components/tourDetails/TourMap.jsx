import React from "react";

import ReactMapboxGl, { Marker, Popup } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYmFkcm91dTE3IiwiYSI6ImNrNHVsbTNsajBlYzAzbWw3NDI4NTVvMGUifQ.UnNK1uyQXmpdE6fndpdTzg",
  scrollZoom: true,
});

const TourMap = ({ data }) => {
  const { locations } = data;

  const pointes = locations ? [...locations] : [];
  return (
    <section className="section-map">
      <Map
        // eslint-disable-next-line react/style-prop-object
        style="mapbox://styles/badrouu17/ck4ulxhaw58uk1coqtymnnacr"
        containerStyle={{ height: "100vh" }}
        zoom={[7]}
        center={
          pointes && pointes[0] && pointes[0].coordinates
            ? pointes[0].coordinates
            : [0, 0]
        }
      >
        {pointes
          ? pointes.map((point, i) => (
              <Marker key={i} coordinates={point.coordinates} anchor="bottom">
                <img
                  className="markerOnMap"
                  alt="marker"
                  src={"https://dztours-api.herokuapp.com/img/pin.png"}
                />
              </Marker>
            ))
          : null}

        {pointes
          ? pointes.map((point, i) => (
              <Popup
                key={i}
                coordinates={point.coordinates}
                offset={{
                  "bottom-left": [12, -38],
                  bottom: [0, -38],
                  "bottom-right": [-12, -38],
                }}
              >
                <p>
                  Day {point.day}: {point.description}
                </p>
              </Popup>
            ))
          : null}
      </Map>
      ;
    </section>
  );
};

export default TourMap;
