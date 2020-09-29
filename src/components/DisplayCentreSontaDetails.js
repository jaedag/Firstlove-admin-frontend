import React from "react";
import { DetailsCard } from "./detailsCard";
import { NavBar } from "./NavBar";

export const DisplayCentreSontaDetails = props => {
  return (
    <div>
      <NavBar />
      <div className=" pb-2 top-heading title-bar mt-5">
        <div className="container">
          <h3 className="mx-3 mt-3 mb-2 font-weight-bold">
            {props.name}
            <sup className="text-secondary card-text icon-color font-weight-bold ml-3">
              <i className="fas fa-edit" />
              Edit
            </sup>
          </h3>
        </div>
      </div>

      <div className="container">
        <div className="row detail-top-margin ml-2 text-secondary">Details</div>
        <div className="row row-cols-3 detail-bottom-margin">
          <div className="col-9 col-md-3">
            <DetailsCard heading="Membership" detail="23" />
          </div>
          <div className="col-9 col-md-3">
            <DetailsCard heading={props.leaderTitle} detail={props.leader} />
          </div>
          <div className="col-9 col-md-3">
            <DetailsCard heading={props.bacentaTitle} detail={props.bacentas} />
          </div>
        </div>
      </div>

      <div className="container">
        <hr className="hr-line" />
      </div>

      <div className="container mb-4">
        <p className="text-secondary">Locations</p>
        <div className="row d-flex justify-content-start">
          <div className="col-auto">
            <button className="card-buttons py-2 px-3 text-center text-nowrap text-white">
              AIT Centre
            </button>
          </div>
          <div className="col-auto">
            <button className="card-buttons py-2 px-3 text-center text-nowrap text-white">
              Kings Centre
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
