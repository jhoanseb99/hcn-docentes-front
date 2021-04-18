import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { initialHcnValues } from "app/const";
import GeneralDataForm from "../utils/GeneralDataForm";
import PatientDataForm from "../utils/PatientDataForm";
import AnthropometryDataForm from "../utils/AnthropometryDataForm";

const initialHcnStruct = {
  GeneralData: {},
  PatientData: {},
  ConsultationReason: {},
  Anthropometry: {},
  Biochemistry: [],
  Interpretation: {},
};

const initialValues = initialHcnValues;

const getDisplayObject = () => {
  let ans = {};
  for (const key in initialValues) {
    ans[key] = { Feedback: false };
  }
  return ans;
};

const getJSON = (data) => {
  let ans = {};
  for (const key in data) {
    let value_data = data[key];
    if (typeof value_data === "number") value_data = value_data.toString();
    if (value_data.length) {
      const key_list = key.split("_");
      let children = ans;
      key_list.forEach((value, index) => {
        if (index === key_list.length - 1) children[value] = value_data;
        else {
          children[value] = { ...(children[value] ?? {}) };
          children = children[value];
        }
      });
    }
  }
  return ans;
};

function HcnForm(props) {
  const { handleSubmit, handleReturn } = props;

  const [displayFields, setDisplayFields] = React.useState(getDisplayObject());
  const isFeedback = false;

  const hcnSchema = Yup.object().shape({
    ValorationDate: Yup.string().required("Campo requerido"),
  });

  const formik = useFormik({
    initialValues,
    //validationSchema: hcnSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      console.log(values);
      setTimeout(() => {
        console.log(getJSON(values));
        handleSubmit(getJSON(values));
      }, 1000);
    },
  });

  const handleOpenFeedback = (event) => {
    const { name } = event.target;
    setDisplayFields({
      ...displayFields,
      [name]: {
        ...displayFields[name],
        Feedback: !displayFields[name].Feedback,
      },
    });
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
                <Nav.Link eventKey="Anthropometry">
                  Datos antropométricos
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Biochemistry">Datos bioquímicos</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="col-10">
            <Tab.Content>
              <Tab.Pane eventKey="GeneralData">
                <GeneralDataForm
                  formik={formik}
                  handleClick={handleOpenFeedback}
                  displayFields={displayFields}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="PatientData">
                <PatientDataForm
                  formik={formik}
                  handleClick={handleOpenFeedback}
                  displayFields={displayFields}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="Anthropometry">
                <AnthropometryDataForm
                  formik={formik}
                  handleClick={handleOpenFeedback}
                  displayFields={displayFields}
                />
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
                  {displayFields["GeneralData_ValorationDate"].Feedback ? (
                    <textarea type="text" className="form-control" />
                  ) : null}
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
          {isFeedback && (
            <div>
              <button
                type="button"
                className="btn btn-primary ml-3"
                name="ConsultationReason"
                onClick={handleOpenFeedback}
              >
                +
              </button>
            </div>
          )}
        </div>
        {displayFields["ConsultationReason"].Feedback ? (
          <textarea type="text" className="form-control" />
        ) : null}
      </div>
      <button type="submit" className="btn btn-primary">
        Crear
      </button>
      <button className="btn btn-secondary ml-2" onClick={handleReturn}>
        Volver
      </button>
    </form>
  );
}

export default HcnForm;
