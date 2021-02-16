import React, {Suspense, lazy} from "react";
import {Redirect, Switch, Route} from "react-router-dom";
import Activities from "./pages/Activities";
import Announcements from "./pages/Announcements";
import Home from "./pages/home";

export default function BasePage() {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={Home} />
      <Route path="/announcements" component={Announcements}  />
      <Route path="/activities" component={Activities}  />
      <Redirect to="/error/404"/>
    </Switch>
  );
}