import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminRouter from "./Admin/AdminRouter";
import Approuter from "./Approuter";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Approuter} />
      <Route exact path="/admin" component={AdminRouter} />
    </Switch>
  );
}

export default Router;
