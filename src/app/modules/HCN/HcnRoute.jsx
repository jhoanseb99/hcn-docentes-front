import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import CreateHcnPage from "./pages/CreateHcnPage";

function HcnRoute() {
  return (
    <Switch>
      <Redirect exact={true} from="/hcn" to="/hcn/all" />
      <Route exact={true} path="/hcn/create" component={CreateHcnPage} />
      <Redirect to="/error/404"/> 
    </Switch>
  );
}

export default HcnRoute;