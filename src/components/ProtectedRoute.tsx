import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import { Route, RouteProps } from "react-router-dom";
import LoadingOrError from "./LoadingOrError";

const ProtectedRoute = ({ component, ...properties }: RouteProps) => (
  <Route
    component={withAuthenticationRequired(
      component as React.ComponentType<any>,
      {
        onRedirecting: () => <LoadingOrError />,
      }
    )}
    {...properties}
  />
);

export default ProtectedRoute;
