import React, {Suspense, lazy} from "react";
import {Redirect, Switch, Route} from "react-router-dom";
import Activities from "./pages/Activities";
import Advertisements from "./pages/Advertisements";
import Home from "./pages/home";

export default function BasePage() {
  return (
    <Switch>
      <Redirect exact from="/" to="/anuncios" />
      <Route path="/home" component={Home} />
      <Route path="/anuncios" component={Advertisements}  />
      <Route path="/actividades" component={Activities}  />
      <Redirect to="/error/404"/>
    </Switch>
  );
}