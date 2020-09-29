import React from "react";
import { HeadingBar } from "../components/headingBar";
import { NavBar } from "../components/NavBar";

export const AddMember = () => {
  return (
    <>
      <NavBar />
      <div className="body-card container body-container mt-5">
        <form>
          <h3 className="my-3">Register a New Member</h3>
          <div className="form-group">
            <div className="row row-cols-1 row-cols-md-2">
              {/* <!-- Basic Info Div --> */}
              <div className="col mb-4">
                <HeadingBar title="Basic Info" />
                <div className="form-row row-cols-2">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id="InputFirstName"
                      aria-describedby="firstNameHelp"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      className="form-control"
                      id="InputLastName"
                      aria-describedby="lastNameHelp"
                      placeholder="Last Name"
                    />
                    <input
                      className="form-control"
                      type="tel"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id="InputGender"
                      aria-describedby="otherNameHelp"
                      placeholder="Other Names"
                    />
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      placeholder="Gender"
                    >
                      <option value="" disabled selected>
                        Gender
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                    <input
                      className="form-control"
                      type="tel"
                      placeholder="WhatsApp Number"
                    />
                  </div>
                </div>
                <input
                  type="email"
                  className="form-control"
                  id="InputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />

                <div className="form-row row-cols-2">
                  <div className="col">
                    <small for="dateofbirth" className="form-text text-muted">
                      Date of Birth
                    </small>
                    <input
                      className="form-control"
                      type="date"
                      id="dateofbirth"
                      placeholder="dd/mm/yyyy"
                    />
                  </div>
                  <div className="col">
                    <small
                      for="occupationInput"
                      className="form-text text-muted"
                    >
                      {" "}
                      .
                    </small>
                    <input
                      className="form-control"
                      type="text"
                      id="occupationInput"
                      placeholder="Occupation"
                    />
                  </div>
                </div>
              </div>
              {/* <!--End of Basic Info Section--> */}

              {/* <!-- Beginning of Pastoral Appointments Section--> */}
              <div className="col mb-4">
                <HeadingBar title="Pastoral Appointments" />
                <div className="form-row row-cols-2">
                  <div className="col">
                    <select
                      className="form-control"
                      id="titleSelect"
                      placeholder="Title"
                    >
                      <option value="" disabled selected>
                        Title
                      </option>
                      <option>Pastor</option>
                      <option>Reverend</option>
                      <option>Apostle</option>
                      <option>Bishop</option>
                    </select>
                    <select
                      className="form-control"
                      id="titleSelect"
                      placeholder="Title"
                    >
                      <option value="" disabled selected>
                        Title
                      </option>
                      <option>Pastor</option>
                      <option>Reverend</option>
                      <option>Apostle</option>
                      <option>Bishop</option>
                    </select>
                  </div>
                  <div className="col">
                    <input
                      className="form-control"
                      type="text"
                      id="yearInput1"
                      placeholder="Year Appointed"
                    />
                    <input
                      className="form-control"
                      type="text"
                      id="yearInput2"
                      placeholder="Year Appointed"
                    />
                  </div>
                </div>
              </div>
              {/* <!--End of Pastoral Appointments Section--> */}

              {/* <!-- Beginning of Church Info Section--> */}
              <div className="col mb-4">
                <HeadingBar title="Church Info" />
                <select
                  className="form-control"
                  id="titleSelect"
                  placeholder="Title"
                >
                  <option value="" disabled selected>
                    Title
                  </option>
                  <option>Pastor</option>
                  <option>Reverend</option>
                  <option>Apostle</option>
                  <option>Bishop</option>
                </select>
                <div className="form-row row-cols-2">
                  <div className="col">
                    <select
                      className="form-control"
                      id="centreSelect"
                      placeholder="Centre"
                    >
                      <option value="" disabled selected>
                        Centre
                      </option>
                      <option>Kasoa</option>
                      <option>Nyanyano</option>
                    </select>
                  </div>
                  <div className="col">
                    <select
                      className="form-control"
                      id="sontaSelect"
                      placeholder="Sonta"
                    >
                      <option value="" disabled selected>
                        Sonta
                      </option>
                      <option>Greater Love Choir</option>
                      <option>Dancing Stars</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-primary mt-3 text-center"
                    >
                      Upload Picture
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- End of Church Info Section--> */}

              {/* <!--Beginning of Pastoral History Section--> */}
              <div className="col">
                <HeadingBar title="Pastoral History" />
                <div className="form-row row-cols">
                  <div className="col">
                    <input
                      className="form-control"
                      type="text"
                      id="historyInput1"
                      placeholder="History Entry"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      className="form-control"
                      type="text"
                      id="yearInput1"
                      placeholder="Year Appointed"
                    />
                  </div>
                  <div className="col-1 d-flex justify-content-between">
                    <button className="plus-button rounded">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="plus"
                        class="svg-inline--fa fa-plus fa-w-14"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="form-row row-cols">
                  <div className="col">
                    <input
                      className="form-control"
                      type="text"
                      id="historyInput1"
                      placeholder="History Entry"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      className="form-control"
                      type="text"
                      id="yearInput1"
                      placeholder="Year Appointed"
                    />
                  </div>
                  <div className="col-1 d-flex justify-content-between">
                    <button className="plus-button rounded">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="plus"
                        class="svg-inline--fa fa-plus fa-w-14"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="form-row row-cols">
                  <div className="col">
                    <input
                      className="form-control"
                      type="text"
                      id="historyInput1"
                      placeholder="History Entry"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      className="form-control"
                      type="text"
                      id="yearInput1"
                      placeholder="Year Appointed"
                    />
                  </div>
                  <div className="col-1 d-flex justify-content-between">
                    <button className="plus-button rounded">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="plus"
                        class="svg-inline--fa fa-plus fa-w-14"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-medium my-3 text-center"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              {/* <!--End of Pastoral History Section--> */}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
