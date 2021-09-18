import React from "react";
import { Route, Switch,  useRouteMatch } from "react-router";
import AdminIndex from ".";
import NavBar from "./components/NavBar";
import SignIn from "./screens/SignIn";
import { PrivateRoute } from "./hooks/useAuth";

const AdminRouter = () => {
  let { path } = useRouteMatch();

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
