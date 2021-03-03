import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "../theme/layout";
import BasePage from "./BasePage";
import ErrorsPage from "./modules/ErrorPages/ErrorPage";

export default function Routes() {
  return (
    <Switch>
      <Route path="/error" component={ErrorsPage}/>
      <Layout>
        <BasePage />
      </Layout>
    </Switch>
  );
}