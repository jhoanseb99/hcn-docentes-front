import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ContentRoute } from "../theme/helpers";
import Home from "./pages/Home.jsx";
import CoursesPage from "./pages/CoursesPage";
import { actions as ccasesRedux } from "./modules/ClinicalCases/_redux/ccasesRedux"; 
import { actions as hcnRedux } from "./modules/HCN/_redux/hcnRedux"; 

const CoursesRoute = React.lazy(() =>
  import("./modules/Courses/CoursesRoute")
);

const CCasesRoute = React.lazy(() =>
  import("./modules/ClinicalCases/CCasesRoute.jsx")
);

const HcnRoute = React.lazy(() =>
  import("./modules/HCN/HcnRoute.jsx")
);

export default function BasePage() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(ccasesRedux.getCCasesList());
    dispatch(hcnRedux.getHcnList());
  }, []);

  return (
    <React.Suspense fallback={<h1>loading page...</h1>}>
      <Switch>
        <Redirect exact={true} from="/" to="/courses/all" />
        
        <ContentRoute exact={true} path="/home" component={Home} />
        <ContentRoute path="/clinical-cases" component={CCasesRoute} />
        <ContentRoute path="/hcn" component={HcnRoute} />

        <ContentRoute exact={true} path="/courses/all" component={CoursesPage} />
        <ContentRoute path="/courses" aside={true} component={CoursesRoute} />
        
        <Redirect to="/error/404"/>
      </Switch>
    </React.Suspense>
    
  );
}