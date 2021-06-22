import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BaseCardSection from "app/components/UI/BaseCardSection.jsx";
import { actions } from "app/modules/Courses/_redux/coursesRedux";

export default function StudentsPage() {
  const { studentsList } = useSelector((state) => state.courses.currentCourse);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.getAllStudentsCourse());
  }, [dispatch]);

  return (
    <BaseCardSection title="Estudiantes" style={{ backgroundColor: "#f3f6f9" }}>
      <div className="container-fluid">
        {/* anuncios */}
        {studentsList.map((value, index) => (
          <div key={index} className="row">
            {/* Card */}
            <div className="card custom-card p-3 mb-5 rounded">
              {/* Card::body */}
              <div className="card-body pt-3">
                {/* Card::body::title */}
                <div className="card-title">
                  <div className="row">
                    <div className="col">
                      <strong className="align-self-center">
                        {value.Name}
                      </strong>
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
