import React, { useState } from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
// import ApolloClient from "apollo-boost";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
// import {Login} from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Members } from "./pages/Members";
import { DisplayMemberDetails } from "./pages/DisplayMemberDetails";
import { AddMember } from "./pages/AddMember";
import { AddCentre } from "./pages/AddCentre";
import { DisplayCentreDetails } from "./pages/DisplayCentreDetails";
import { memberContext } from "./context/MemberContext";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI || "/graphql",
  cache: new InMemoryCache()
});

const PastorsAdmin = () => {
  const [memberData, setMemberData] = useState({
    filtered: [],
    searchKey: ""
  });

  return (
    <Router>
      <memberContext.Provider value={{ memberData, setMemberData }}>
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/members" component={Members} exact />
          <Route path="/members/addmember" component={AddMember} exact />
          <Route
            path="/members/displaymember"
            component={DisplayMemberDetails}
            exact
          />
          <Route path="/centre/addcentre" component={AddCentre} exact />
          <Route
            path="/centre/displaycentredetails"
            component={DisplayCentreDetails}
            exact
          />
        </Switch>
      </memberContext.Provider>
    </Router>
  );
};

const Main = () => (
  <ApolloProvider client={client}>
    <PastorsAdmin />
  </ApolloProvider>
);

ReactDOM.render(<Main />, document.getElementById("root"));
registerServiceWorker();
