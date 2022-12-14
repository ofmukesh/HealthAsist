import React from "react";
import { Link } from "react-router-dom";
import ReactSpeedometer from "react-d3-speedometer";

const Home = () => {
  return (
    <div className="">
      <div className="main-landing text-light">
        <div className="landing">
          <div className="p-5">
            <h1>
              <b>Get all about your health on</b>
            </h1>
            <h1>
              <b>Health Assist</b>
            </h1>
            <br />
            <Link to="/entry" className="landing-btn">
              Get started
            </Link>
          </div>
        </div>
      </div>

      <div className="row p-5">
        <div className="col-md-4 p-3">
          <div className="home-card home-card-2">
            <div className="card-2 cards">
              <Link to="/entry" className="card-button btn btn-warning">
                Check Disease
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-3">
          <div className="home-card home-card-3">
            <div className="card-3 cards">
              <Link to="/food" className="card-button btn btn-warning">
                Suggested food
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-3">
          <div className="home-card home-card-1">
            <div className="card-1 cards">
              <Link to="/bmi" className="card-button btn btn-warning">
                Check Your BMI
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="col-md-3 p-3 ">
          <div className="home-card home-card-4 ">
            <div className="card-4 cards"></div>
          </div>
        </div> */}
      </div>

      <footer className="text-light footer p-5">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="footer-card">
              <div className="footer-card-top"></div>
              <div className="text-center p-3">
                <h2>Health Assist</h2>
                <h6>UIET MDU</h6>
                <h6>Rohtak, Haryana</h6>
                <br />
                <h6>
                  <b>Email:-</b>healthassist@gmail.com
                </h6>
              </div>
            </div>
          </div>
          <div className="col">
            <h2>Our Services</h2>
            <div className="ms-3">
              <Link className="footer-a" to="/entry">
                Disease Checker
              </Link>
              <br />
              <Link className="footer-a" to="/bmi">
                BMI
              </Link>
              <br />
              <Link className="footer-a" to="/food">
                Food Suggestion
              </Link>
              <br />
              <Link className="footer-a" to="/about">
                About
              </Link>
              <br />
              <Link className="footer-a" to="/contact">
                Contact us
              </Link>
            </div>
          </div>
          <div className="col"></div>
          <div className="text-center mt-4">
            <h6>
              ?? Copyright <b>Health Assist </b> All rights Reserve
            </h6>
          </div>
        </div>
      </footer>

    </div>
  );
};
export default Home;
