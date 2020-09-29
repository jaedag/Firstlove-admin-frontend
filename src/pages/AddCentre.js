import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { jobs } from "../queries/membersData";
import { NEW_CENTRE } from "../queries/addCentre";
import { NavBar } from "../components/NavBar";

export const AddCentre = () => {
  return (
    <div>
      <NavBar />
      <div className="body-card py-4 container mt-5">
        <div className="container infobar">Start a New Centre</div>
        <form>
          <div className="form-group">
            <div className="row row-cols-1 row-cols-md-2">
              {/* <!-- Basic Info Div --> */}
              <div className="col mb-2">
                <div className="form-row row-cols-2">
                  <div className="col">
                    <select
                      className="form-control"
                      id="townSelect"
                      placeholder="Town"
                    >
                      <option value="" disabled selected>
                        Town
                      </option>
                      <option>Kasoa</option>
                      <option>Dansoman</option>
                    </select>
                    <select
                      className="form-control"
                      id="communitySelect"
                      placeholder="Community"
                    >
                      <option value="" disabled selected>
                        Community
                      </option>
                      <option>Aplaku Community</option>
                      <option>Kasoa Community</option>
                    </select>
                  </div>
                </div>

                <div className="form-row row-cols-3">
                  <div className="col-9">
                    <input
                      className="form-control"
                      type="text"
                      id="centerleaderName"
                      placeholder="Name of Centre Leader"
                    />
                    <select
                      className="form-control"
                      id="centerLeaderNameselect"
                      placeholder="Name of Centre Leader"
                    >
                      <option value="" disabled selected>
                        Name of Centre Leader
                      </option>
                      <option>Aplaku Community</option>
                      <option>Kasoa Community</option>
                    </select>

                    <select
                      className="form-control"
                      id="meetingDayselect"
                      placeholder="Meeting Day"
                    >
                      <option value="" disabled selected>
                        Meeting Day
                      </option>
                      <option>Tuesday</option>
                      <option>Wednesday</option>
                      <option>Thursday</option>
                      <option>Friday</option>
                      <option>Saturday</option>
                    </select>
                  </div>
                </div>

                <div className="row row-cols-3 d-flex align-items-center">
                  <div className="col-6">
                    <input
                      className="form-control"
                      id="coordinates"
                      placeholder="Coordinates"
                    />
                  </div>
                  <div className="col-6">
                    <button type="submit" className="btn btn-primary">
                      Locate Me Now
                    </button>
                  </div>
                </div>
                <small className="text-muted">
                  Click this button if you are currently standing at your centre
                  location
                </small>

                <div className="form-row row-cols-3">
                  <div className="col-9">
                    <select
                      className="form-control"
                      id="bacentaSelect"
                      placeholder="Bacenta"
                    >
                      <option value="" disabled selected>
                        Bacenta
                      </option>
                      <option>AIT Main</option>
                      <option>AIT Aplaku</option>
                    </select>
                  </div>
                </div>
                <small className="text-muted">
                  List any Bacentas that are being moved to this Town
                </small>
                <div>
                  <button type="submit" className="btn btn-primary">
                    Add Bacenta
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center m">
            <button type="submit" className="btn btn-primary px-5 py-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
