import React from "react";
import { Route, Switch } from "react-router-dom";
import AddMeasurement from "../pages/AddMeasurement/AddMeasurement";
import Home from "../pages/Home/Home";

export const MainRouter: React.FC = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/new" component={AddMeasurement} />
      <Route path="/edit/:id" component={AddMeasurement} />
    </Switch>
  </>
);

export default MainRouter;
