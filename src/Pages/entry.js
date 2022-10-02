import React from "react";

const Entry = () => {
  function Submit(e) {
    e.preventDefault();
    var url =
      "/entry/" +
      e.target.gender.value +
      "/" +
      e.target.age.value +
      "/" +
      e.target.city.value;
    window.location.href = url;
  }
  return (
    <div className="entry">
      <div className="container text-dark">
        <div className="row px-3">
          <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
            <div className="img-left d-none d-md-flex"></div>

            <div className="card-body">
              <h4 className="title text-center mt-4">
                Check predicted of disease{" "}
              </h4>
              <form action="#" className="form-box px-3" onSubmit={Submit}>
                <div className="form-input">
                  <span>📆</span>
                  <input
                    type="number"
                    id="age"
                    placeholder="Age"
                    tabIndex="10"
                    required
                  />
                </div>
                <div className="form-input">
                  <select
                    className="form-control"
                    name=""
                    id="gender"
                    type="text"
                    placeholder="gender"
                    tabIndex="10"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <br />
                <div className="form-input">
                  <select
                    className="form-control"
                    name=""
                    id="city"
                    type="text"
                    placeholder="City"
                    tabIndex="10"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      City
                    </option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Rohtak">Rohtak</option>
                    <option value="Kochy">Kochy</option>
                  </select>
                </div>

                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-block text-uppercase"
                  >
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
