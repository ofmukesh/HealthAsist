import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/images/logo.png";

const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="navbar-brand text-light">
            <img
              src={logo}
              alt=""
              className="img-fluid"
              height="40"
              width="45"
            />
            <b style={{ fontSize: "25px" }}>Health Assist</b>
          </Link>
          <div className="d-flex">
            <Link className="m-2 nav-items" to="/entry">
              <b>Disease Checker</b>
            </Link>
            <Link className="m-2 nav-items" to="/bmi">
              <b>BMI</b>
            </Link>
            <Link className="m-2 nav-items" to="/food">
              <b>Food Suggestion</b>
            </Link>
            <Link className="m-2 nav-items" to="/about">
              <b>About</b>
            </Link>
            <Link className="m-2 nav-items" to="/contact">
              <b>Contact us</b>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
