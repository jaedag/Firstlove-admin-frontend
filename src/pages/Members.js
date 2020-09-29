import React from "react";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/sideBar";
import { MemberTable } from "../sections/memberTable";

export const Members = () => {
  return (
    <div className="app_body">
      <NavBar />
      <div className="col">
        <div className="container-fluid">
          <div className="row">
            <div className="row col px-md-3">
              <div className="col-lg-3 col-md-3 px-2">
                <SideBar />
              </div>
              <MemberTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
