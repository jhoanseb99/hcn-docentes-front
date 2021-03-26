import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { actions as hcnRedux } from "../_redux/hcnRedux";
import BaseCardSection from "../../../components/UI/BaseCardSection";

function CreateHcnPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [ hcn, setHcn ] = React.useState({
    GeneralData: {},
    PatientData: {},
    ConsultationReason: {},
    Anthropometry: {},
    Biochemistry: [],
    Interpretation: {}
  });

  const [ general_data, setGeneralData ] = React.useState({
    ValorationDate: "",
		HCNNumber: "",
		AdmissionDate: "",
    Room: "",
    Interpretation: "",
  });

  const handleChange = event => {
    let { name, value } = event.target;
    setGeneralData({
      ...general_data,
      [name]: value
    })
  };

  const saveHCN = event => {
    event.preventDefault(); 
    dispatch(hcnRedux.createHcn({ GeneralData: general_data, TeacherID: 50001 }))
      .then(() => history.push("/courses/clinical-cases"))
  };

  return (
    <BaseCardSection title="Crear Historia Clínica Nutricional">
      <form onSubmit={saveHCN}>
        <div className="form-group">
          <label htmlFor="ValorationDate">Fecha de valoración</label>
          <input 
            type="date"
            name="ValorationDate"
            className="form-control"
            value={general_data.ValorationDate}
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="AdmissionDate">Fecha de admisión</label>
          <input 
            type="date"
            name="AdmissionDate"
            className="form-control"
            value={general_data.AdmissionDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="HCNNumber">Número HCN</label>
          <input 
            type="number"
            name="HCNNumber"
            className="form-control"
            value={general_data.HCNNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Room">Habitación</label>
          <input 
            type="number"
            name="Room"
            className="form-control"
            value={general_data.Room}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Interpretation">Interpretación</label>
          <textarea 
            type="text"
            name="Interpretation"
            className="form-control"
            value={general_data.Interpretation}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Crear</button>
      </form>
    </BaseCardSection>
  );
}

export default CreateHcnPage;