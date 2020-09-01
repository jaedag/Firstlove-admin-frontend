import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
// import ApolloClient from "apollo-boost";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
// import { Signin } from "./pages/Signin";
import  Dashboard  from "./pages/Dashboard";
import { Member } from "./pages/Member";
import { AddMember } from "./pages/AddMember";


const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI || '/graphql',
  cache: new InMemoryCache(),
});

const PastorsAdmin = () => {
  return(
    <Router>
      <Switch>
        <Route path='/' component={Dashboard} exact />
        <Route path='/member' component={Member} exact />
        <Route path='/member/addMember' component={AddMember} exact />
      </Switch>
    </Router>
  )
}

const Main = () => (
  <ApolloProvider client={client}>
    <PastorsAdmin/>    
  </ApolloProvider>
);

ReactDOM.render(<Main />, document.getElementById("root"));
registerServiceWorker();
