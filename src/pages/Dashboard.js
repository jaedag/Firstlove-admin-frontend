import React from "react";
import { useQuery } from "@apollo/client";
import { members, communityCount, sontaCount } from "../queries/dashboardData";
import { NavBar } from "../components/NavBar";
import { DashboardCard } from "../components/dashboardCard";
import { DashboardButton } from "../components/dashboardButton";

const Dashboard = () => {
  const {
    data: member,
    error: memberCountError,
    loading: memberCountLoading
  } = useQuery(members);
  const {
    data: community,
    error: communityCountError,
    loading: communityCountLoading
  } = useQuery(communityCount);
  const {
    data: sonta,
    error: sontaCountError,
    loading: sontaCountLoading
  } = useQuery(sontaCount);

  if (memberCountLoading || communityCountLoading || sontaCountLoading) {
    return (
      <div>
        <NavBar />
        <div className="container body-container">
          <div className="row row-cols-2">
            <DashboardCard name="Members" number="Loading..." />
            <DashboardCard name="Pastors" number="Loading..." />
            <DashboardCard name="Communities" number="Loading..." />
            <DashboardCard name="Ministries" number="Loading..." />
          </div>

          <div className="row row-cols-2 row-cols-md-4">
            <DashboardButton
              btnText="Register Member"
              btnLink="members/addmember"
            />
            <DashboardButton btnText="Close a Centre" />
            <DashboardButton
              btnText="Start a Centre"
              btnLink="centre/addcentre"
            />
            <DashboardButton btnText="Add Community" />
            <DashboardButton btnText="Add Town" />
          </div>
        </div>
      </div>
    );
  }
  if (memberCountError || communityCountError || sontaCountError) {
    console.log(memberCountError, communityCountError, sontaCountError);
    return (
      <div>
        <NavBar />
        <div className="container body-container">
          <div className="row row-cols-2 row-cols-lg-4">
            <div className="col">
              <DashboardCard name="Members" />
            </div>
            <div className="col">
              <DashboardCard name="Pastors" cardLink="members/displaymember" />
            </div>
            <div className="col">
              <DashboardCard
                name="Communities"
                cardLink="centre/displaycentredetails"
              />
            </div>
            <div className="col">
              <DashboardCard name="Ministries" />
            </div>
          </div>

          <div className="row row-cols-2 row-cols-md-4">
            <DashboardButton
              btnText="Register Member"
              btnLink="members/addmember"
            />
            <DashboardButton btnText="Close a Centre" />
            <DashboardButton
              btnText="Start a Centre"
              btnLink="centre/addcentre"
            />
            <DashboardButton btnText="Add Community" />
            <DashboardButton btnText="Add Town" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="container body-container">
        <div className="row row-cols-2">
          <div className="col">
            <DashboardCard name="Members" number={member.memberCount} />
          </div>
          <div className="col">
            <DashboardCard name="Pastors" number={member.memberCount} />
          </div>
          <div className="col">
            <DashboardCard
              name="Communities"
              number={community.communityCount}
            />
          </div>
          <div className="col">
            <DashboardCard name="Ministries" number={sonta.sontaCount} />{" "}
          </div>
        </div>

        <div className="row">
          <div className="col">
            <DashboardButton
              btnText="Register Member"
              btnLink="members/displaymember"
            />
          </div>
          <DashboardButton btnText="Close a Centre" />
          <DashboardButton
            btnText="Start a Centre"
            btnLink="centre/addcentre"
          />
          <DashboardButton btnText="Add Community" />
          <DashboardButton btnText="Add Town" />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
