import React from "react";

const BMI = () => {
  function Calculate_BMI(e) {
    e.preventDefault();
    var h = document.getElementById("h").value;
    var w = document.getElementById("w").value;
    var bmi = w / (((h / 100) * h) / 100);
    var bmio = bmi.toFixed(2);
    console.log(bmio);

    document.getElementById("result").innerHTML = "Your BMI is " + bmio;
  }
  return (
    <div className="entry">
      <div class="container">
        <div class="row px-3">
          <div class="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
            <div class="img-left-bmi d-none d-md-flex"></div>

            <div class="card-body">
              <h4 class="title text-center mt-4">BMI Calculator</h4>
              <form class="form-box px-3" onSubmit={Calculate_BMI}>
                <div class="form-input">
                  <span>🔢</span>
                  <input
                    type="text"
                    id="h"
                    placeholder="height (in cm)"
                    name="name"
                    tabindex="10"
                  />
                </div>
                <div class="form-input">
                  <span>👤</span>
                  <input
                    type="number"
                    id="w"
                    placeholder="weight (in kg)"
                    tabindex="10"
                  />
                </div>
                <div class="mb-3">
                  <button type="submit" class="btn btn-block text-uppercase">
                    Check
                  </button>
                </div>
                <h4 id="result" class="title"></h4>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BMI;
