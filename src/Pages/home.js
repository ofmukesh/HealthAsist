import React from "react";
import { Link } from "react-router-dom";
import ReactSpeedometer from "react-d3-speedometer";

const Home = () => {
  return (
    <div className="">
      <ReactSpeedometer
    needleHeightRatio={0.7}
    maxSegmentLabels={5}
    segments={5555}
    needleColor="yellow"
    startColor="blue"
    endColor="red"
    value={333}
  />
        <ReactSpeedometer
    value={777}
    needleColor="yellow"
    startColor="#AAF"
    endColor="tomato"
    needleHeightRatio={0.5}
    currentValueText="Happiness Level"
    customSegmentLabels={[
      {
        text: "Very Bad",
        position: "OUTSIDE",
        color: "#555",
      },
      {
        text: "Bad",
        position: "OUTSIDE",
        color: "#555",
      },
      {
        text: "Ok",
        position: "OUTSIDE",
        color: "#555",
      },
      {
        text: "Good",
        position: "OUTSIDE",
        color: "#555",
      },
      {
        text: "Very Good",
        position: "OUTSIDE",
        color: "#666",
      },
    ]}
  />
      <div className="row p-3">
        <div className="col-md-3 p-3">
          <div className="home-card home-card-1">
            <div className="card-1 cards">
              <button className="card-button btn btn-warning">Check</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 p-3">
          <div className="home-card home-card-2">
            <div className="card-2 cards"></div>
          </div>
        </div>
        <div className="col-md-3 p-3">
          <div className="home-card home-card-3">
            <div className="card-3 cards"></div>
          </div>
        </div>
        <div className="col-md-3 p-3 home-card-4">
          <div className="home-card">
            <div className="card-4 cards"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
