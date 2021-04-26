import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../Courses/_redux/coursesRedux";

import Activities from "app/pages/Activities.jsx";
import Announcements from "app/pages/Announcements.jsx";
import CCasesPage from "app/pages/CCasesPage.jsx";
import HcnPage from "app/pages/HcnPage.jsx";
import GradePage from "app/pages/GradePage";

export default function CoursesRoute() {
  const { currentCourse } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (currentCourse.id) {
      dispatch(actions.getCourseData(currentCourse.id));
    }
  }, [dispatch]);

  return (
    <Switch>
      <Redirect exact={true} from="/courses" to="/courses/announcements" />
      {currentCourse.id ? (
        <>
          <Route
            exact={true}
            path="/courses/announcements"
            component={Announcements}
          />
          <Route
            exact={true}
            path="/courses/activities"
            component={Activities}
          />
          <Route
            exact={true}
            path="/courses/activities/grade"
            component={GradePage}
          />
          <Route
            exact={true}
            path="/courses/clinical-cases"
            component={CCasesPage}
          />
          <Route exact={true} path="/courses/hcn" component={HcnPage} />
        </>
      ) : (
        <Redirect to="/courses/all" />
      )}

      {/* <Route exact={true} path="/courses/:id" component={(props) => <MainCoursePage {...props}/>} /> */}
      <Redirect to="/error/404" />
    </Switch>
  );
}
