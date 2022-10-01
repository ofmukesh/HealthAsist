import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
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
