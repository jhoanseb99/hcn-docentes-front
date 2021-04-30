import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import BaseCardSection from "app/components/UI/BaseCardSection.jsx";
import { actions } from "app/modules/Activities/_redux/activitiesRedux";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

function GradePage(props) {
  const { id } = props.match.params;
  const { gradeList, studentsList } = useSelector(
    ({ activities, students }) => ({
      gradeList: activities.gradeList,
      studentsList: students.studentsList,
    })
  );
  const [studentData, setStudentData] = React.useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    dispatch(actions.getAllSolvedHcn(id));
  }, [dispatch, id]);

  React.useEffect(() => {
    if (studentsList.length) {
      let student_data = {};
      studentsList.forEach((student) => {
        student_data[student.ID] = { ...student };
      });
      setStudentData(student_data);
    }
  }, [studentsList]);

  return (
    <BaseCardSection title="Calificar" style={{ backgroundColor: "#f3f6f9" }}>
      <div className="container-fluid">
        {gradeList.map((value, index) => (
          <div key={index} className="row">
            {/* Card */}
            <div className="card custom-card p-3 mb-5 bg-white rounded">
              {/* Card::body */}
              <div className="card-body pt-3">
                {/* Card::body::title */}
                <div className="card-title">
                  <div className="row">
                    <div className="col">
                      <strong className="align-self-center">
                        {studentData[value.Solver]
                          ? studentData[value.Solver].Name
                          : null}
                      </strong>
                    </div>
                    <div className="col text-right">
                      <a
                        className="btn btn-primary font-weight-bolder font-size-sm mr-3"
                        title="calificar"
                        onClick={() => {
                          history.push(`/hcn/update/${value.MongoID}`);
                        }}
                      >
                        <AssignmentTurnedInIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </BaseCardSection>
  );
}

export default GradePage;
