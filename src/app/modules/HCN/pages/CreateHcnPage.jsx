import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import { actions as hcnRedux } from "../_redux/hcnRedux";
import BaseSection from "../../../components/UI/BaseSection";
import HcnForm from "../components/HcnForm";

function CreateHcnPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { progress } = useSelector((state) => state.hcn);

  const saveHCN = (hcn_data) => {
    dispatch(hcnRedux.createHcn(hcn_data)).then(() =>
      history.push("/courses/hcn")
    );
  };

  return (
    <div className="card">
      <div className="card-body">
        <BaseSection title="Crear Historia Clínica Nutricional">
          <HcnForm handleSubmit={saveHCN} />
        </BaseSection>
      </div>
    </div>
  );
}

export default CreateHcnPage;
