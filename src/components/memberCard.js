import React from "react";

export const MemberCard = props => {
  return (
    <div className="member-info-card mb-4 p-4">
      <div className="row info-heading">
        <div className="col">
          <h6 className=" my-2">{props.title}</h6>
        </div>
        <div className="col d-flex justify-content-end text-secondary card-text icon-color font-weight-bold my-auto">
          <i className="fas fa-edit" />
          Edit
        </div>
      </div>
      {props.children}
    </div>
  );
};
