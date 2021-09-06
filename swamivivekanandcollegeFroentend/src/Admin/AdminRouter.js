import React, { useEffect } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import AdminIndex from ".";
import NavBar from "./components/NavBar";
import SignIn from "./screens/SignIn";
import { PrivateRoute, useAuth } from "./hooks/useAuth";

const AdminRouter = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="Admin">
      <Switch>
        <PrivateRoute exact path={path}>
          <NavBar>
            <AdminIndex />
          </NavBar>
        </PrivateRoute>
        <PrivateRoute exact path={`${path}/dashboard`}>
          <NavBar>
            <AdminIndex />
          </NavBar>
        </PrivateRoute>
        <Route exact path={`${path}/signIn`} component={SignIn} />
      </Switch>
    </div>
  );
};

export default AdminRouter;
