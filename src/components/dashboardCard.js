import React from "react";
import { Link } from "react-router-dom";

export const DashboardCard = props => {
  if (props.name === "Communities") {
    return (
      <Link
        to={`${props.cardLink}`}
        className="card align-self-center card-body mx-2 py-5 mb-5"
      >
        <span className="fas fa-landmark fa-2x d-md-none  pb-3 icon-color text-center" />
        <span className="fas fa-landmark fa-5x d-none d-md-block pb-3 icon-color text-center" />
        <h5 className="card-title text-center text-nowrap text-white">
          {props.name}
        </h5>
        <p className="card-text text-muted text-center text-nowrap">
          {props.number}
        </p>
      </Link>
    );
  } else if (props.name === "Ministries") {
    return (
      <Link
        to={`${props.cardLink}`}
        className="card align-self-center card-body mx-2 py-5 mb-5"
      >
        <span className="fas fa-church fa-2x d-md-none  pb-3 icon-color text-center" />
        <span className="fas fa-church fa-5x d-none d-md-block pb-3 icon-color text-center" />
        <h5 className="card-title text-center text-nowrap text-white">
          {props.name}
        </h5>
        <p className="card-text text-muted text-center text-nowrap">
          {props.number}
        </p>
      </Link>
    );
  } else if (props.name === "Members") {
    return (
      <Link
        to={`${props.cardLink}`}
        className="card align-self-center card-body mx-2 py-5 mb-5"
      >
        <span className="fas fa-users fa-2x d-md-none  pb-3 icon-color text-center" />
        <span className="fas fa-users fa-5x d-none d-md-block pb-3 icon-color text-center" />
        <h5 className="card-title text-center text-nowrap text-white">
          {props.name}
        </h5>
        <p className="card-text text-muted text-center text-nowrap">
          {props.number}
        </p>
      </Link>
    );
  } else if (props.name === "Pastors") {
    return (
      <Link
        to={`${props.cardLink}`}
        className="card align-self-center card-body mx-2 py-5 mb-5"
      >
        <span className="fas fa-users fa-2x d-md-none  pb-3 icon-color text-center" />
        <span className="fas fa-users fa-5x d-none d-md-block pb-3 icon-color text-center" />
        <h5 className="card-title text-center text-nowrap text-white">
          {props.name}
        </h5>
        <p className="card-text text-muted text-center text-nowrap">
          {props.number}
        </p>
      </Link>
    );
  }
};
