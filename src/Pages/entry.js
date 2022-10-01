import React from "react";

const Entry = () => {
  return (
    <div className="entry">
      <div class="container text-dark">
        <div class="row px-3">
          <div class="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
            <div class="img-left d-none d-md-flex"></div>

            <div class="card-body">
              <h4 class="title text-center mt-4">Check YOUR GENDER</h4>
              <form action="#" class="form-box px-3">
                <div class="form-input">
                  <span>👤</span>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    tabindex="10"
                  />
                </div>
                <div class="form-input">
                  <span>🔞</span>
                  <input type="number" placeholder="Age" tabindex="10" />
                </div>
                <div class="form-input">
                  <span>
                    🗺️
                  </span>
                  <input type="text" placeholder="Location" tabindex="10" />
                </div>

                <div class="mb-3">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="cb1"
                    />
                    <label for="cb1" class="custom-control-label">
                      Remember me
                    </label>
                  </div>
                </div>
                <div class="mb-3">
                  <button type="submit" class="btn btn-block text-uppercase">
                    Check
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entry;
