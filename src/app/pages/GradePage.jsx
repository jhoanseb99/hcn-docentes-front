import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import BaseCardSection from "app/components/UI/BaseCardSection.jsx";
import { actions } from "app/modules/Activities/_redux/activitiesRedux";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

function GradePage(props) {
  const { id } = props.match.params;
  const { gradeList, studentsList, user } = useSelector(
    ({ activities, students, auth }) => ({
      gradeList: activities.gradeList,
      studentsList: students.studentsList,
      user: auth.user,
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
        <div className="row">
          <div className="col mr-3">
            <h5 className="mb-3">Por calificar</h5>
            {gradeList
              .filter((element) => !element.Reviewed)
              .map((value, index) => (
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
                                : user.Name}
                            </strong>
                          </div>
                          <div className="col text-right">
                            <a
                              className="btn btn-primary font-weight-bolder font-size-sm mr-3"
                              title="calificar"
                              onClick={() => {
                                history.push(
                                  `/hcn/feedback/${id}/${value.MongoID}`
                                );
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

          <div className="col">
            <h5 className="mb-3">Calificadas</h5>
            {gradeList
              .filter((element) => element.Reviewed)
              .map((value, index) => (
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
                                : user.Name}
                            </strong>
                          </div>
                          <div className="col text-right">
                            <a
                              className="btn btn-primary font-weight-bolder font-size-sm mr-3"
                              title="calificar"
                              onClick={() => {
                                history.push(
                                  `/hcn/feedback/${id}/${value.MongoID}`
                                );
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
        </div>
      </div>
    </BaseCardSection>
  );
}

export default GradePage;
