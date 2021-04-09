import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import GeneralDataForm from "../utils/GeneralDataForm";

const initialHcnStruct = {
  GeneralData: {},
  PatientData: {},
  ConsultationReason: {},
  Anthropometry: {},
  Biochemistry: [],
  Interpretation: {}
};

const initialValues = {
  ConsultationReason: '',
  Interpretation: '',
  Feedback: '',

  // General data 
  GeneralData_ValorationDate: '',
  GeneralData_HCNNumber: '',
  GeneralData_AdmissionDate: '',
  GeneralData_Room: '',
  GeneralData_Interpretation: '',
  GeneralData_Feedback: '',

  // Patient Data
  PatientData_FullName: '',
  PatientData_Birthdate: '',
  PatientData_Gender: '',
  PatientData_Sex: '',
  PatientData_EPS: '',
  PatientData_Telephone: '',
  PatientData_Occupation: '',
  PatientData_CivilStatus: '',
  PatientData_Interpretation: '',
  PatientData_Feedback: '',

  // Anthropometry
  Anthropometry_Interpretation: '',
  Anthropometry_Feedback: '',

  Anthropometry_Weight_Actual: '',
  Anthropometry_Weight_Usual: '',
  Anthropometry_Weight_Reference: '',
  Anthropometry_Weight_ChangeWeight: '',
  Anthropometry_Weight_Interpretation: '',
  Anthropometry_Weight_Feedback: '',

  Anthropometry_TricipitalFold_Value: '',
  Anthropometry_TricipitalFold_Interpretation: '',
  Anthropometry_TricipitalFold_Feedback: '',

  Anthropometry_BrachialPerimeter_Value: '',
  Anthropometry_BrachialPerimeter_Interpretation: '',
  Anthropometry_BrachialPerimeter_Feedback: '',

  Anthropometry_AbdominalPerimeter_Value: '',
  Anthropometry_AbdominalPerimeter_Interpretation: '',
  Anthropometry_AbdominalPerimeter_Feedback: '',

  Anthropometry_SubscapularFold_Value: '',
  Anthropometry_SubscapularFold_Interpretation: '',
  Anthropometry_SubscapularFold_Feedback: '',

  Anthropometry_Height_Value: '',
  Anthropometry_Height_Interpretation: '',
  Anthropometry_Height_Feedback: '',

  Anthropometry_Structure_Value: '',
  Anthropometry_Structure_Interpretation: '',
  Anthropometry_Structure_Feedback: '',

  Anthropometry_BMI_Value: '',
  Anthropometry_BMI_Interpretation: '',
  Anthropometry_BMI_Feedback: '',

  // Biochemistry
  Biochemistry_Interpretation: '',
  Biochemistry_Feedback: '',
};

const getDisplayObject = () => {
  let ans = {};
  for(const key in initialValues) {
    ans[key] = { Feedback: false }
  }
  return ans;
}

const getJSON = (data) => {
  let ans = {};
  for(const key in data) {
    if(data[key].length) {
      const key_list = key.split('_');
      key_list.forEach(value => {
        let children = ans;
      })
    }
  }
  return ans;
};

function HcnForm(props) {
  const { handleSubmit, handleReturn } = props;

  const [ displayFields, setDisplayFields ] = React.useState(getDisplayObject());

  const hcnSchema = Yup.object().shape({
    ValorationDate: Yup.string()
    .required("Campo requerido"),
  });

  const formik = useFormik({
    initialValues,
    //validationSchema: hcnSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      console.log(values);
      setTimeout(() => {
        console.log("subiendo");
        //handleSubmit(hcn);
      }, 1000);
    }
  });

  const handleOpenFeedback = event => {
    const { name } = event.target;
    setDisplayFields({
      ...displayFields,
      [name]: {
        ...displayFields[name],
        Feedback: !displayFields[name].Feedback
      }
    })
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row mb-3">
        <Tab.Container id="left-tabs" defaultActiveKey="GeneralData">
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
                    <label htmlFor="GeneralData_ValorationDate">Fecha de valoración</label>
                    <div className="d-flex flex-row">
                      <input 
                        type="date"
                        name="GeneralData_ValorationDate"
                        className="form-control"
                        {...formik.getFieldProps("GeneralData_ValorationDate")}
                      />
                      <button 
                        type="button"
                        className="btn btn-primary ml-3"
                        name="GeneralData_ValorationDate"
                        onClick={handleOpenFeedback}
                      >+</button>
                    </div>
                    { displayFields["GeneralData_ValorationDate"].Feedback ? 
                      <textarea 
                        type="text"
                        className="form-control"
                      /> : null
                    }
                  </div>
                  <div className="form-group col">
                    <label htmlFor="GeneralData_AdmissionDate">Fecha de admisión</label>
                    <div className="d-flex flex-row">
                      <input 
                        type="date"
                        name="GeneralData_AdmissionDate"
                        className="form-control"
                        {...formik.getFieldProps("GeneralData_AdmissionDate")}
                      />
                      <button 
                        type="button"
                        className="btn btn-primary ml-3"
                        name="GeneralData_AdmissionDate"
                        onClick={handleOpenFeedback}
                      >+</button>
                    </div>
                    { displayFields["GeneralData_AdmissionDate"].Feedback ? 
                      <textarea 
                        type="text"
                        className="form-control"
                      /> : null
                    }
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="GeneralData_HCNNumber">Número HCN</label>
                  <div className="d-flex flex-row">
                    <input 
                      type="number"
                      name="GeneralData_HCNNumber"
                      className="form-control"
                      {...formik.getFieldProps("GeneralData_HCNNumber")}
                    />
                    <button 
                      type="button"
                      className="btn btn-primary ml-3"
                      name="GeneralData_HCNNumber"
                      onClick={handleOpenFeedback}
                    >+</button>
                  </div>
                  { displayFields["GeneralData_HCNNumber"].Feedback ? 
                    <textarea 
                      type="text"
                      className="form-control"
                    /> : null
                  }
                </div>
                <div className="form-group">
                  <label htmlFor="GeneralData_Room">Habitación</label>
                  <div className="d-flex flex-row">
                    <input 
                      type="number"
                      name="GeneralData_Room"
                      className="form-control"
                      {...formik.getFieldProps("GeneralData_Room")}
                    />
                    <button 
                      type="button"
                      className="btn btn-primary ml-3"
                      name="GeneralData_Room"
                      onClick={handleOpenFeedback}
                    >+</button>
                  </div>
                  { displayFields["GeneralData_Room"].Feedback ? 
                    <textarea 
                      type="text"
                      className="form-control"
                    /> : null
                  }
                </div>
                <div className="form-group">
                  <label htmlFor="GeneralData_Interpretation">Interpretación</label>
                  <div className="d-flex flex-row">
                    <textarea 
                      type="text"
                      name="GeneralData_Interpretation"
                      className="form-control"
                      {...formik.getFieldProps("GeneralData_Interpretation")}
                    />
                    <div>
                      <button 
                        type="button"
                        className="btn btn-primary ml-3"
                        name="GeneralData_Interpretation"
                        onClick={handleOpenFeedback}
                      >+</button>
                    </div>
                  </div>
                  { displayFields["GeneralData_Interpretation"].Feedback ? 
                    <textarea 
                      type="text"
                      className="form-control"
                    /> : null
                  }
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="PatientData">
                <div className="form-group">
                  <label htmlFor="PatientData_FullName">Nombre Completo</label>
                  <div className="d-flex flex-row">
                    <input 
                      type="text"
                      name="PatientData_FullName"
                      className="form-control"
                      {...formik.getFieldProps("PatientData_FullName")}
                    />
                    <button className="btn btn-primary ml-3">+</button>
                  </div>
                  { displayFields["PatientData_FullName"].Feedback ? 
                    <textarea 
                      type="text"
                      className="form-control"
                    /> : null
                  }
                </div>
                <div className="form-row">
                  <div className="form-group col-6">
                    <label htmlFor="PatientData_Birthdate">Fecha de cumpleaños</label>
                    <div className="d-flex flex-row">
                      <input 
                        type="date"
                        name="PatientData_Birthdate"
                        className="form-control"
                        {...formik.getFieldProps("PatientData_Birthdate")}
                      />
                      <button className="btn btn-primary ml-3">+</button>
                    </div>
                    { displayFields["PatientData_Birthdate"].Feedback ? 
                      <textarea 
                        type="text"
                        className="form-control"
                      /> : null
                    }
                  </div>
                  <div className="form-group col-3">
                    <label htmlFor="PatientData_Gender">Género</label>
                    <div className="d-flex flex-row">
                      <select 
                        type="text"
                        name="PatientData_Gender"
                        className="form-control"
                        {...formik.getFieldProps("PatientData_Gender")}
                      >
                        <option value="">Seleccionar</option>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                      </select>
                      <button className="btn btn-primary ml-3">+</button>
                    </div>
                    { displayFields["PatientData_Gender"].Feedback ? 
                      <textarea 
                        type="text"
                        className="form-control"
                      /> : null
                    }
                  </div>
                  <div className="form-group col-3">
                    <label htmlFor="PatientData_CivilStatus">Estado civil</label>
                    <div className="d-flex flex-row">
                      <select 
                        type="text"
                        name="PatientData_CivilStatus"
                        className="form-control"
                        {...formik.getFieldProps("PatientData_CivilStatus")}
                      >
                        <option value="">Seleccionar</option>
                        <option value="Married">Casado/a</option>
                        <option value="Single">Soltero/a</option>
                      </select>
                      <button className="btn btn-primary ml-3">+</button>
                    </div>
                    { displayFields["PatientData_CivilStatus"].Feedback ? 
                      <textarea 
                        type="text"
                        className="form-control"
                      /> : null
                    }
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="PatientData_EPS">EPS</label>
                  <div className="d-flex flex-row">
                    <input 
                      type="text"
                      name="PatientData_EPS"
                      className="form-control"
                      {...formik.getFieldProps("PatientData_EPS")}
                    />
                    <button className="btn btn-primary ml-3">+</button>
                  </div>
                  { displayFields["PatientData_EPS"].Feedback ? 
                    <textarea 
                      type="text"
                      className="form-control"
                    /> : null
                  }
                </div>
                <div className="form-group">
                  <label htmlFor="PatientData_Telephone">Teléfono</label>
                  <div className="d-flex flex-row">
                    <input 
                      type="text"
                      name="PatientData_Telephone"
                      className="form-control"
                      {...formik.getFieldProps("PatientData_Telephone")}
                    />
                    <button className="btn btn-primary ml-3">+</button>
                  </div>
                  { displayFields["PatientData_Telephone"].Feedback ? 
                    <textarea 
                      type="text"
                      className="form-control"
                    /> : null
                  }
                </div>
                <div className="form-group">
                  <label htmlFor="PatientData_Occupation">Ocupación</label>
                  <div className="d-flex flex-row">
                    <input 
                      type="text"
                      name="PatientData_Occupation"
                      className="form-control"
                      {...formik.getFieldProps("PatientData_Occupation")}
                    />
                    <button className="btn btn-primary ml-3">+</button>
                  </div>
                  { displayFields["PatientData_Occupation"].Feedback ? 
                    <textarea 
                      type="text"
                      className="form-control"
                    /> : null
                  }
                </div>
                <div className="form-group">
                  <label htmlFor="PatientData_Interpretation">Interpretación</label>
                  <div className="d-flex flex-row">
                    <textarea 
                      type="text"
                      name="PatientData_Interpretation"
                      className="form-control"
                      {...formik.getFieldProps("PatientData_Interpretation")}
                    />
                    <div><button className="btn btn-primary ml-3">+</button></div>
                  </div>
                  { displayFields["PatientData_Interpretation"].Feedback ? 
                    <textarea 
                      type="text"
                      className="form-control"
                    /> : null
                  }
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Anthropometry">
                <div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="ActualWeight">Peso actual</label>
                    <div className="d-flex flex-row">
                      <input 
                        type="number"
                        name="ActualWeight"
                        className="form-control"
                        {...formik.getFieldProps("GeneralData_Room")}
                      />
                      <button className="btn btn-primary ml-3">+</button>
                    </div>
                    { displayFields["GeneralData_ValorationDate"].Feedback ? 
                      <textarea 
                        type="text"
                        className="form-control"
                      /> : null
                    }
                  </div>
                  <div className="form-group col">
                    <label htmlFor="UsualWeight">Peso usual</label>
                    <div className="d-flex flex-row">
                      <input 
                        type="number"
                        name="UsualWeight"
                        className="form-control"
                        {...formik.getFieldProps("GeneralData_Room")}
                      />
                      <button className="btn btn-primary ml-3">+</button>
                    </div>
                    { displayFields["GeneralData_ValorationDate"].Feedback ? 
                      <textarea 
                        type="text"
                        className="form-control"
                      /> : null
                    }
                  </div>
                  <div className="form-group col">
                    <label htmlFor="ReferenceWeight">Peso de referencia</label>
                    <div className="d-flex flex-row">
                      <input 
                        type="number"
                        name="ReferenceWeight"
                        className="form-control"
                        {...formik.getFieldProps("GeneralData_Room")}
                      />
                      <button className="btn btn-primary ml-3">+</button>
                    </div>
                    { displayFields["GeneralData_ValorationDate"].Feedback ? 
                      <textarea 
                        type="text"
                        className="form-control"
                      /> : null
                    }
                  </div>
                  <div className="form-group col">
                    <label htmlFor="ChangeWeight">Cambio de peso</label>
                    <div className="d-flex flex-row">
                      <input 
                        type="number"
                        name="ChangeWeight"
                        className="form-control"
                        {...formik.getFieldProps("GeneralData_Room")}
                      />
                      <button className="btn btn-primary ml-3">+</button>
                    </div>
                    { displayFields["GeneralData_ValorationDate"].Feedback ? 
                      <textarea 
                        type="text"
                        className="form-control"
                      /> : null
                    }
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="TricipitalFold">Pliegue tricipital</label>
                    <div className="d-flex flex-row">
                      <input 
                        type="number"
                        name="TricipitalFold"
                        className="form-control"
                        {...formik.getFieldProps("GeneralData_Room")}
                      />
                      <button className="btn btn-primary ml-3">+</button>
                    </div>
                    { displayFields["GeneralData_ValorationDate"].Feedback ? 
                      <textarea 
                        type="text"
                        className="form-control"
                      /> : null
                    }
                  </div>
                  <div className="form-group col">
                    <label htmlFor="SubscapularFold">Pliegue subescapular</label>
                    <div className="d-flex flex-row">
                      <input 
                        type="number"
                        name="SubscapularFold"
                        className="form-control"
                        {...formik.getFieldProps("GeneralData_Room")}
                      />
                      <button className="btn btn-primary ml-3">+</button>
                    </div>
                    { displayFields["GeneralData_ValorationDate"].Feedback ? 
                      <textarea 
                        type="text"
                        className="form-control"
                      /> : null
                    }
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="BrachialPerimeter">Perímetro braquial</label>
                    <div className="d-flex flex-row">
                      <input 
                        type="number"
                        name="BrachialPerimeter"
                        className="form-control"
                        {...formik.getFieldProps("GeneralData_Room")}
                      />
                      <button className="btn btn-primary ml-3">+</button>
                    </div>
                    { displayFields["GeneralData_ValorationDate"].Feedback ? 
                      <textarea 
                        type="text"
                        className="form-control"
                      /> : null
                    }
                  </div>
                  <div className="form-group col">
                    <label htmlFor="AbdominalPerimeter">Perímetro abdominal</label>
                    <div className="d-flex flex-row">
                      <input 
                        type="number"
                        name="AbdominalPerimeter"
                        className="form-control"
                        {...formik.getFieldProps("GeneralData_Room")}
                      />
                      <button className="btn btn-primary ml-3">+</button>
                    </div>
                    { displayFields["GeneralData_ValorationDate"].Feedback ? 
                      <textarea 
                        type="text"
                        className="form-control"
                      /> : null
                    }
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="Height">Altura</label>
                    <div className="d-flex flex-row">
                      <input 
                        type="number"
                        name="Height"
                        className="form-control"
                        {...formik.getFieldProps("GeneralData_Room")}
                      />
                      <button className="btn btn-primary ml-3">+</button>
                    </div>
                    { displayFields["GeneralData_ValorationDate"].Feedback ? 
                      <textarea 
                        type="text"
                        className="form-control"
                      /> : null
                    }
                  </div>
                  <div className="form-group col">
                    <label htmlFor="Structure">Estructura</label>
                    <div className="d-flex flex-row">
                      <input 
                        type="number"
                        name="Structure"
                        className="form-control"
                        {...formik.getFieldProps("GeneralData_Room")}
                      />
                      <button className="btn btn-primary ml-3">+</button>
                    </div>
                    { displayFields["GeneralData_ValorationDate"].Feedback ? 
                      <textarea 
                        type="text"
                        className="form-control"
                      /> : null
                    }
                  </div>
                  <div className="form-group col">
                    <label htmlFor="BMI">BMI</label>
                    <div className="d-flex flex-row">
                      <input 
                        type="number"
                        name="BMI"
                        className="form-control"
                        {...formik.getFieldProps("GeneralData_Room")}
                      />
                      <button className="btn btn-primary ml-3">+</button>
                    </div>
                    { displayFields["GeneralData_ValorationDate"].Feedback ? 
                      <textarea 
                        type="text"
                        className="form-control"
                      /> : null
                    }
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="Interpretation">Interpretación</label>
                  <div className="d-flex flex-row">
                    <textarea 
                      type="text"
                      name="Interpretation"
                      className="form-control"
                      {...formik.getFieldProps("GeneralData_Room")}
                    />
                    <div><button className="btn btn-primary ml-3">+</button></div>
                  </div>
                  { displayFields["GeneralData_ValorationDate"].Feedback ? 
                      <textarea 
                        type="text"
                        className="form-control"
                      /> : null
                    }
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Biochemistry">
                <div className="form-group">
                  <label htmlFor="TricipitalFold">Pliegue tricipital</label>
                  <div className="d-flex flex-row">
                    <input 
                      type="text"
                      name="TricipitalFold"
                      className="form-control"
                      {...formik.getFieldProps("TricipitalFold")}
                    />
                    <button className="btn btn-primary ml-3">+</button>
                  </div>
                  { displayFields["GeneralData_ValorationDate"].Feedback ? 
                      <textarea 
                        type="text"
                        className="form-control"
                      /> : null
                    }
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>
      <div className="form-group">
        <label htmlFor="ConsultationReason">Razón de la consulta</label>
        <div className="d-flex flex-row">
          <textarea 
            type="text"
            name="ConsultationReason"
            className="form-control"
            {...formik.getFieldProps("ConsultationReason")}
          />
          <div>
            <button 
              type="button"
              className="btn btn-primary ml-3"
              name="ConsultationReason"
              onClick={handleOpenFeedback}
            >+</button>
          </div>
        </div>
        { displayFields["ConsultationReason"].Feedback ? 
          <textarea 
            type="text"
            className="form-control"
          /> : null
        }
      </div>
      <button type="submit" className="btn btn-primary">Crear</button>
      <button className="btn btn-secondary ml-2" onClick={handleReturn}>Volver</button>
    </form>
  );
}

export default HcnForm;