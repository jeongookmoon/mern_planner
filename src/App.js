import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import PlansList from "./components/plans-list.component";
import EditPlan from "./components/edit-plan.component";
import CreatePlan from "./components/create-plan.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={PlansList} />
      <Route path="/edit/:id" component={EditPlan} />
      <Route path="/create" component={CreatePlan} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
