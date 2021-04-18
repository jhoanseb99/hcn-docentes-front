import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import { actions as hcnRedux } from "../_redux/hcnRedux";
import BaseSection from "app/components/UI/BaseSection";
import HcnForm from "../components/HcnForm";
import { getHcn } from "../_redux/hcnCrud";

function UpdateHcnPage(props) {
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const history = useHistory();

  const updateHCN = (hcn_data) => {
    dispatch(hcnRedux.createHcn({ ...hcn_data, TeacherID: 50001 })).then(() =>
      history.push("/courses/hcn")
    );
  };

  React.useEffect(() => {
    getHcn({ id }).then((data) => {
      console.log(data);
    });
  }, [id]);

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
          <HcnForm
            handleSubmit={updateHCN}
            handleReturn={() => history.push("/courses/hcn")}
          />
        </BaseSection>
      </div>
    </div>
  );
}

export default UpdateHcnPage;
