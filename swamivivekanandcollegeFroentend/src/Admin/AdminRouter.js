import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import AdminIndex from ".";

const AdminRouter = () => {
  let { path } = useRouteMatch();

  return (
    <div className="Admin">
      <Switch>
        <Route path={path} component={AdminIndex} />
        <Route exact path={`${path}/dashboard`} component={AdminIndex} />
      </Switch>
    </div>
  );
};

export default AdminRouter;
