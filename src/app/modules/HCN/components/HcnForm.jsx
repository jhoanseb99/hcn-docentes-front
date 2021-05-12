import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { initialHcnValues } from "app/const";
import GeneralDataForm from "../utils/GeneralDataForm";
import PatientDataForm from "../utils/PatientDataForm";
import AnthropometryDataForm from "../utils/AnthropometryDataForm";
import { CircularProgress } from "@material-ui/core";

const modeTypes = {
  create: "create",
  update: "update",
  feedback: "feedback",
};

const getDisplayObject = () => {
  let ans = {};
  for (const key in initialHcnValues) {
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

const jsonToInputs = (data) => {
  if (!data) return null;
  const ans = {};
  let keys = Object.keys(data);
  while (keys.length !== 0) {
    const key = keys.pop();
    if (key[0] !== "_") {
      const key_list = key.split("_");
      let children = data;
      key_list.forEach((value) => {
        children = children[value];
      });
      if (typeof children === "object") {
        Object.keys(children).forEach((value) => {
          keys.push(`${key}_${value}`);
        });
      } else if (children) ans[key] = children;
    }
  }
  return ans;
};

function HcnForm(props) {
  const {
    handleSubmit,
    data,
    isFeedback = false,
    feedbackHCN,
    wadReviewed,
  } = props;

  const history = useHistory();
  const [displayFields, setDisplayFields] = React.useState(getDisplayObject());

  const hcnSchema = Yup.object().shape({
    ValorationDate: Yup.string().required("Campo requerido"),
  });

  const formik = useFormik({
    initialValues: jsonToInputs(data) || initialHcnValues,
    //validationSchema: hcnSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      setTimeout(() => {
        console.log(getJSON(values));
        handleSubmit(getJSON(values));
        actions.setSubmitting(false);
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

  console.log(formik);

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
              {/* <Nav.Item>
                <Nav.Link eventKey="Biochemistry">Datos bioquímicos</Nav.Link>
              </Nav.Item> */}
            </Nav>
          </div>
          <div className="col-10">
            <Tab.Content>
              <Tab.Pane eventKey="GeneralData">
                <GeneralDataForm
                  formik={formik}
                  handleClick={handleOpenFeedback}
                  displayFields={displayFields}
                  hasFeedback={isFeedback}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="PatientData">
                <PatientDataForm
                  formik={formik}
                  handleClick={handleOpenFeedback}
                  displayFields={displayFields}
                  hasFeedback={isFeedback}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="Anthropometry">
                <AnthropometryDataForm
                  formik={formik}
                  handleClick={handleOpenFeedback}
                  displayFields={displayFields}
                  hasFeedback={isFeedback}
                />
              </Tab.Pane>
              {/* <Tab.Pane eventKey="Biochemistry">
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
              </Tab.Pane> */}
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
        <span>{!data ? "Crear" : isFeedback ? "Guardar" : "Actualizar"}</span>
        {formik.isSubmitting && (
          <CircularProgress className="ml-2" size={10} color="inherit" />
        )}
      </button>
      {data && isFeedback && (
        <button
          type="button"
          className="btn btn-success ml-2"
          disabled={wadReviewed}
          onClick={feedbackHCN}
        >
          Calificar
        </button>
      )}
      <button
        type="button"
        className="btn btn-secondary ml-2"
        onClick={() => history.goBack()}
      >
        Volver
      </button>
    </form>
  );
}

export default HcnForm;
