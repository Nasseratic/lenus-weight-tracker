import ProtectedRoute from "components/ProtectedRoute";
import AddMeasurement from "pages/AddMeasurement/AddMeasurement";
import Dashboard from "pages/Dashboard/Dashboard";
import Home from "pages/Home/Home";
import React from "react";
import { Route, Switch } from "react-router-dom";

export const MainRouter: React.FC = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <ProtectedRoute path="/new" component={AddMeasurement} />
      <ProtectedRoute path="/edit/:id" component={AddMeasurement} />
    </Switch>
  </>
);

export default MainRouter;
