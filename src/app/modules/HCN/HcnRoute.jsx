import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import CreateHcnPage from "./pages/CreateHcnPage";
import UpdateHcnPage from "./pages/UpdateHcnPage";

function HcnRoute() {
  return (
    <Switch>
      <Redirect exact={true} from="/hcn" to="/hcn/all" />
      <Route exact={true} path="/hcn/create" component={CreateHcnPage} />
      <Route
        exact={true}
        path="/hcn/update/:id"
        component={(props) => <UpdateHcnPage {...props} />}
      />
      <Redirect to="/error/404" />
    </Switch>
  );
}

export default HcnRoute;
