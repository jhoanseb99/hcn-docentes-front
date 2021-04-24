import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import BaseSection from "app/components/UI/BaseSection";
import CardGridContainer from "app/components/UI/CardGridContainer";
import { actions as courseRedux } from "app/modules/Courses/_redux/coursesRedux";

function Home() {
  const { hcnList } = useSelector((state) => state.hcn);
  const { ccasesList } = useSelector((state) => state.clinicalCases);
  const { coursesList } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  const handleCourse = (id) => {
    dispatch(courseRedux.setCurrentCourse("id", id));
  };

  return (
    <>
      <BaseSection title="Cursos" className="mb-5">
        <CardGridContainer data={coursesList} limit={4} size={4}>
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
      <BaseSection title="Casos Clínicos" className="mb-5">
        <CardGridContainer data={ccasesList} limit={4} size={4}>
          {(clinical_case) => (
            <NavLink to={`/clinical-cases/${clinical_case.ID}`}>
              <div className="card custom-card" style={{ height: "150px" }}>
                <div className="d-flex card-body justify-content-center align-items-center">
                  <div className="d-flex flex-column align-items-center">
                    <span className="mt-1">{clinical_case.Title}</span>
                  </div>
                </div>
              </div>
            </NavLink>
          )}
        </CardGridContainer>
      </BaseSection>
      <BaseSection title="Historias Clínicas Nutricionales" className="pb-5">
        <CardGridContainer data={hcnList} limit={4} size={4}>
          {(hcn) => (
            <NavLink to={`/hcn/update/${hcn.MongoID}`}>
              <div className="card custom-card" style={{ height: "150px" }}>
                <div className="d-flex card-body justify-content-center align-items-center">
                  <div className="d-flex flex-column align-items-center">
                    <span className="mt-1">{hcn.ID}</span>
                  </div>
                </div>
              </div>
            </NavLink>
          )}
        </CardGridContainer>
      </BaseSection>
    </>
  );
}

export default Home;
