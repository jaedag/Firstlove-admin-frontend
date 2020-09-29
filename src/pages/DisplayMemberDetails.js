import React from "react";
import { NavBar } from "../components/NavBar";
import { MemberCard } from "../components/memberCard";

export const DisplayMemberDetails = () => {
  return (
    <div className="container body-container">
      <NavBar />
      <h5 className="font-weight-bold mb-3">Display Member Information</h5>
      <div class="container">
        <div class="row infobar mb-4">Basic Info</div>
        <div class="row row-cols-1 row-cols-md-2">
          {/* Member Picture Profile Page */}
          <div class="col">
            <MemberCard
              title="Cris Batcock"
              children={
                <div className="row m-2">
                  <div className="col">
                    <div className="row">
                      <div className="col-6 d-flex justify-content-end">
                        <img
                          src="./assets/img/user.png"
                          className="m-2 profile-img"
                          alt="current member"
                        />
                      </div>
                      <div className="col-6">
                        <div className="row">
                          <p className="font-weight-bold card-text">
                            Pastor
                            <br />
                            Cris Batcock
                          </p>
                        </div>
                        <div className="row">
                          <p className="font-weight-light card-text">
                            Westlands Centre
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-primary mt-2 p-3 card-text text-center"
                        >
                          Make Leader
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
          </div>
          {/* Leadership History Timeline */}
          <div class="col">
            <MemberCard
              title="History Timeline"
              children={
                <div class="row">
                  <ul class="timeline">
                    <li>
                      <p class="card-text">
                        Kasoa Community Leader
                        <br />
                        <small>2020</small>
                      </p>
                    </li>
                    <li>
                      <p class="card-text">
                        Centre Leader at AIT
                        <br />
                        <small>2019</small>
                      </p>
                    </li>
                    <li>
                      <p class="card-text">
                        Bacenta Leader at Kings
                        <br />
                        <small>2018</small>
                      </p>
                    </li>
                  </ul>
                </div>
              }
            />
          </div>
          {/* Bio Information */}
          <div className="col">
            <MemberCard
              title="Bio"
              children={
                <div class="container p-2">
                  <div class="row mb-2">
                    <div class="col">
                      <p class="text-secondary card-text">First Name</p>
                    </div>
                    <div class="col">
                      <p class="font-weight-bold card-text">Cris</p>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="col">
                      <p class="text-secondary card-text">Last Name</p>
                    </div>
                    <div class="col">
                      <p class="font-weight-bold card-text">Batcock</p>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="col">
                      <p class="text-secondary card-text">Email Address</p>
                    </div>
                    <div class="col">
                      <p class="font-weight-bold card-text">
                        cbatcock@themeforest.net
                      </p>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="col">
                      <p class="text-secondary card-text">Date of Birth</p>
                    </div>
                    <div class="col">
                      <p class="font-weight-bold card-text">8/07/2001</p>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="col">
                      <p class="text-secondary card-text">Gender</p>
                    </div>
                    <div class="col">
                      <p class="font-weight-bold card-text">Male</p>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="col">
                      <p class="text-secondary card-text">Marital Status</p>
                    </div>
                    <div class="col">
                      <p class="font-weight-bold card-text">Single</p>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="col">
                      <p class="text-secondary card-text">Occupation</p>
                    </div>
                    <div class="col">
                      <p class="font-weight-bold card-text">Engineer</p>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="col">
                      <p class="text-secondary card-text">Phone Number</p>
                    </div>
                    <div class="col">
                      <p class="font-weight-bold card-text">691-267-3948</p>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="col">
                      <p class="text-secondary card-text">WhatsApp Number</p>
                    </div>
                    <div class="col">
                      <p class="font-weight-bold card-text">691-267-3948</p>
                    </div>
                  </div>
                </div>
              }
            />
          </div>
          {/* Curret Church Status */}
          <div className="col">
            <MemberCard
              title="Church Activity"
              children={
                <div class="container p-2">
                  <div class="row mb-2">
                    <div class="col">
                      <p class="text-secondary card-text">Town</p>
                    </div>
                    <div class="col">
                      <p class="font-weight-bold card-text">Kasoa</p>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="col">
                      <p class="text-secondary card-text">Community</p>
                    </div>
                    <div class="col">
                      <p class="font-weight-bold card-text">Campus</p>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="col">
                      <p class="text-secondary card-text">Centre Code</p>
                    </div>
                    <div class="col">
                      <p class="font-weight-bold card-text">11WES</p>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="col">
                      <p class="text-secondary card-text">Title</p>
                    </div>
                    <div class="col">
                      <p class="font-weight-bold card-text">Pastor</p>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="col">
                      <p class="text-secondary card-text">Year</p>
                    </div>
                    <div class="col">
                      <p class="font-weight-bold card-text">2018</p>
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
