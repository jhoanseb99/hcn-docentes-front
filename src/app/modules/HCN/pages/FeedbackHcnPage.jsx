import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProgressBar from "react-bootstrap/ProgressBar";
import { CircularProgress } from "@material-ui/core";
import { actions as hcnRedux } from "../_redux/hcnRedux";
import BaseSection from "app/components/UI/BaseSection";
import HcnForm from "../components/HcnForm";
import { actions } from "app/modules/Activities/_redux/activitiesRedux";

function FeedbackHcnPage(props) {
  const { activity_id, mongo_id } = props.match.params;
  const { gradeList, progress } = useSelector(({ activities, hcn }) => ({
    gradeList: activities.gradeList,
    progress: hcn.progress,
  }));
  const [hcn_data, setHcnData] = React.useState({});
  const [activity, setActivity] = React.useState({ Reviewed: 0 });
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  const updateHCN = (values) => {
    dispatch(
      hcnRedux.updateFeedbackHcn({ ...values, _id: hcn_data._id }, activity)
    ).then(() => refresh());
  };

  const feedbackHCN = () => {
    dispatch(hcnRedux.feedbackHcn(activity));
  };

  const refresh = async () => {
    setLoading(true);
    dispatch(actions.getAllSolvedHcn(activity_id));
    dispatch(hcnRedux.getHcn({ id: mongo_id })).then((data) => {
      setHcnData(data);
      setLoading(false);
    });
  };

  React.useEffect(() => refresh(), [dispatch, mongo_id]);

  React.useEffect(() => {
    setActivity(
      gradeList.find((value) => value.MongoID == mongo_id) ?? { Reviewed: 0 }
    );
  }, [gradeList]);

  return (
    <div className="card">
      <div className="card-body">
        <BaseSection
          title="Editar Historia Clínica Nutricional"
          component={() => (
            <ProgressBar
              className="mb-3"
              now={progress}
              label={`Progreso de la hcn %`}
            />
          )}
        >
          {!loading ? (
            <HcnForm
              handleSubmit={updateHCN}
              data={hcn_data}
              isFeedback={true}
              wadReviewed={activity.Reviewed}
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
