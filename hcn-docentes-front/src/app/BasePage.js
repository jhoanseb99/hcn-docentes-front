import React from "react";
import {Redirect, Switch, Route} from "react-router-dom";
import Home from "./pages/home";

const CoursesRoute = React.lazy(() =>
  import("./modules/Courses/CoursesRoute")
);

export default function BasePage() {
  return (
    <React.Suspense fallback={<h1>loading page...</h1>}>
      <Switch>
        <Redirect exact={true} from="/" to="/courses/all" />
        <Route exact={true} path="/home" component={Home} />
        <Route path="/courses" component={CoursesRoute} />
        <Redirect to="/error/404"/>
      </Switch>
    </React.Suspense>
    
  );
}