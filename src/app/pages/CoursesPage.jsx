import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";

import BaseSection from "../components/UI/BaseSection";

import { actions } from "../modules/Courses/_redux/coursesRedux";
import CardGridContainer from "../components/UI/CardGridContainer";

function CoursesPage() {
  const { coursesList } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.getCoursesList());
  }, [dispatch]);

  const handleCourse = (id) => {
    dispatch(actions.setCurrentCourse("id", id));
  };

  return (
    <BaseSection title="Cursos">
      {/* Courses */}
      <CardGridContainer data={coursesList}>
        {(course) => (
          <NavLink to="/courses">
            <div
              className="card custom-card"
              style={{ height: "150px" }}
              onClick={() => handleCourse(course.ID)}
            >
              <div className="d-flex card-body justify-content-center align-items-center">
                <div className="d-flex flex-column align-items-center">
                  <FontAwesomeIcon icon={faChalkboardTeacher} size="3x" />
                  <span className="mt-1">{course.Name}</span>
                </div>
              </div>
            </div>
          </NavLink>
        )}
      </CardGridContainer>
    </BaseSection>
  );
}

export default CoursesPage;
