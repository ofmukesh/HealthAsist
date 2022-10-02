import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const BMI = () => {
  var url = "/bmi/";

  function Calculate_BMI(e) {
    e.preventDefault();
    var h = document.getElementById("h").value;
    var w = document.getElementById("w").value;
    var bmi = w / (((h / 100) * h) / 100);
    var bmio = bmi.toFixed(2);

    window.location.href = url + bmio;
  }
  return (
    <div className="entry">
      <div className="container">
        <div className="row px-3">
          <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
            <div className="img-left-bmi d-none d-md-flex"></div>

            <div className="card-body">
              <h4 className="title text-center mt-4">BMI Calculator</h4>
              <form className="form-box px-3" onSubmit={Calculate_BMI}>
                <div className="form-input">
                  <span>🔢</span>
                  <input
                    type="text"
                    id="h"
                    placeholder="height (in cm)"
                    name="name"
                    tabindex="10"
                    required
                  />
                </div>
                <div className="form-input">
                  <span>👤</span>
                  <input
                    type="number"
                    id="w"
                    placeholder="weight (in kg)"
                    tabindex="10"
                    required
                  />
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-block text-uppercase"
                  >
                    Check
                  </button>
                  <Link
                    to="/"
                    style={{ fontSize: "20px" }}
                    className="btn btn-block text-uppercase"
                  >
                    🔙
                  </Link>
                </div>

                <h4 id="result" className="title"></h4>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BMI;
