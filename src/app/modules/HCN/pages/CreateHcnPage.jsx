import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { actions as hcnRedux } from "../_redux/hcnRedux";
import BaseCardSection from "../../../components/UI/BaseCardSection";
import BaseSection from "../../../components/UI/BaseSection";

import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import ProgressBar from 'react-bootstrap/ProgressBar'

const initialHcnValues = {
  GeneralData: {},
  PatientData: {},
  ConsultationReason: {},
  Anthropometry: {},
  Biochemistry: [],
  Interpretation: {}
};

function CreateHcnPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [ hcn, setHcn ] = React.useState(initialHcnValues);

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
    <BaseSection title="Crear Historia Clínica Nutricional">
      <ProgressBar className="mb-3" now={60}/>
      <form onSubmit={saveHCN}>
        <div className="row mb-3">
          <Tab.Container id="left-tabs-example" defaultActiveKey="GeneralData">
            <div className="col-2">
              <Nav variant="pills" className="flex-column mb-3">
                <Nav.Item>
                  <Nav.Link eventKey="GeneralData">Datos generales</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="PatientData">Datos del paciente</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Anthropometry">Datos antropométricos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Biochemistry">Datos bioquímicos</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="col-10">
              <Tab.Content>
                <Tab.Pane eventKey="GeneralData">
                  <div className="form-row">
                    <div className="form-group col">
                      <label htmlFor="ValorationDate">Fecha de valoración</label>
                      <input 
                        type="date"
                        name="ValorationDate"
                        className="form-control"
                        value={general_data.ValorationDate}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col">
                      <label htmlFor="AdmissionDate">Fecha de admisión</label>
                      <input 
                        type="date"
                        name="AdmissionDate"
                        className="form-control"
                        value={general_data.AdmissionDate}
                        onChange={handleChange}
                      />
                    </div>
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
                </Tab.Pane>
                <Tab.Pane eventKey="PatientData">
                  <div className="form-group">
                    <label htmlFor="FullName">Nombre Completo</label>
                    <input 
                      type="text"
                      name="FullName"
                      className="form-control"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-6">
                      <label htmlFor="Birthdate">Fecha de cumpleaños</label>
                      <input 
                        type="date"
                        name="Birthdate"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group col-3">
                      <label htmlFor="Gender">Género</label>
                      <select 
                        type="text"
                        name="Gender"
                        className="form-control"
                      >
                        <option value="">Seleccionar</option>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                      </select>
                    </div>
                    <div className="form-group col-3">
                      <label htmlFor="CivilStatus">Estado civil</label>
                      <select 
                        type="text"
                        name="CivilStatus"
                        className="form-control"
                      >
                        <option value="">Seleccionar</option>
                        <option value="Married">Casado/a</option>
                        <option value="Single">Soltero/a</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="EPS">EPS</label>
                    <input 
                      type="text"
                      name="EPS"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Telephone">Teléfono</label>
                    <input 
                      type="text"
                      name="Telephone"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Telephone">Ocupación</label>
                    <input 
                      type="text"
                      name="Telephone"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Interpretation">Interpretación</label>
                    <textarea 
                      type="text"
                      name="Interpretation"
                      className="form-control"
                    />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="Anthropometry">
                  <div className="form-row">
                    <div className="form-group col">
                      <label htmlFor="ActualWeight">Peso actual</label>
                      <input 
                        type="number"
                        name="ActualWeight"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group col">
                      <label htmlFor="UsualWeight">Peso usual</label>
                      <input 
                        type="number"
                        name="UsualWeight"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group col">
                      <label htmlFor="ReferenceWeight">Peso de referencia</label>
                      <input 
                        type="number"
                        name="ReferenceWeight"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group col">
                      <label htmlFor="ChangeWeight">Cambio de peso</label>
                      <input 
                        type="number"
                        name="ChangeWeight"
                        className="form-control"
                      />
                    </div>
                  </div>
                  
                </Tab.Pane>
                <Tab.Pane eventKey="Biochemistry">
                  <div className="form-group">
                    <label htmlFor="ValorationDate">Fecha de valoración</label>
                    <input 
                      type="date"
                      name="ValorationDate"
                      className="form-control"
                    />
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
        <div className="form-group">
          <label htmlFor="ConsultationReason">Razón de la consulta</label>
          <textarea 
            type="text"
            name="ConsultationReason"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Crear</button>
        <button onClick={() => history.push("/courses/hcn")} className="btn btn-secondary ml-2">Volver</button>
      </form>
    </BaseSection>
  );
}

export default CreateHcnPage;