import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import { CircularProgress } from "@material-ui/core";
import { actions as hcnRedux } from "../_redux/hcnRedux";
import BaseSection from "app/components/UI/BaseSection";
import HcnForm from "../components/HcnForm";
import { actions } from "app/modules/Activities/_redux/activitiesRedux";

function FeedbackHcnPage(props) {
  const { activity_id, mongo_id } = props.match.params;
  const { gradeList, authToken } = useSelector(({ activities, auth }) => ({
    gradeList: activities.gradeList,
    studentsList: auth.authToken,
  }));
  const [hcn_data, setHcnData] = React.useState({});
  const [activity, setActivity] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const updateHCN = (values) => {
    dispatch(hcnRedux.updateHcn({ ...values, _id: hcn_data._id }));
  };

  const feedbackHCN = () => {
    dispatch(hcnRedux.feedbackHcn(activity));
  };

  React.useEffect(() => {
    setLoading(true);
    dispatch(hcnRedux.getHcn({ id: mongo_id })).then((data) => {
      setHcnData(data);
      setLoading(false);
    });
  }, [dispatch, mongo_id]);

  React.useEffect(() => {
    if (gradeList.length) {
      setActivity(gradeList.find((value) => value.MongoID == mongo_id));
    } else dispatch(actions.getAllSolvedHcn(activity_id));
  }, [gradeList]);

  return (
    <div className="card">
      <div className="card-body">
        <BaseSection
          title="Editar Historia Clínica Nutricional"
          component={() => (
            <ProgressBar
              className="mb-3"
              now={60}
              label={`Progreso de la hcn %`}
            />
          )}
        >
          {!loading ? (
            <HcnForm
              handleSubmit={updateHCN}
              handleReturn={() => history.push("/courses/hcn")}
              data={hcn_data}
              isFeedback={true}
              feedbackHCN={feedbackHCN}
            />
          ) : (
            <CircularProgress size={10} color="inherit" />
          )}
        </BaseSection>
      </div>
    </div>
  );
}

export default FeedbackHcnPage;
