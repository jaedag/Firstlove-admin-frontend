import React from "react";
import { DisplayCentreSontaDetails } from "../components/DisplayCentreSontaDetails";
import { NavBar } from "../components/NavBar";

export const DisplayCentreDetails = () => {
  return (
    <div>
      <NavBar />
      <DisplayCentreSontaDetails
        name="AIT Centre"
        leaderTitle="Centre Leader"
        leader="Cris Batcock"
        bacentaTitle="Number of Bacentas"
        bacentas="2"
      />
    </div>
  );
};
