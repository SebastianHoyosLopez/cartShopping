import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component, active, path, ...rest }) => {
  return active ? (
    <Route component={component} path={path} {...rest} />
  ) : (
    <Redirect to="/login" {...rest} />
  );
};

export default PrivateRoute;
