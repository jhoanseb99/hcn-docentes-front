import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { CircularProgress } from "@material-ui/core";

function ActivityForm(props) {
  const {
    handleSubmit,
    handleClose,
    ccasesList = [],
    hcnList = [],
    activity,
  } = props;

  const initialValues = {
    Title: activity ? activity.Title : "",
    Description: activity ? activity.Description : "",
    Type: activity ? activity.Type : "",
    LimitDate: activity
      ? moment(activity.LimitDate).format("yyyy-MM-DDThh:mm:ss")
      : "",
    HCNID: activity ? activity.HCNID : "",
    ClinicalCaseID: activity ? activity.ClinicalCaseID : "",
    Difficulty: activity ? activity.Difficulty : "1",
  };

  const activitySchema = Yup.object().shape({
    Title: Yup.string().required("Campo requerido"),
    Description: Yup.string().required("Campo requerido"),
    Type: Yup.string().required("Campo requerido"),
    LimitDate: Yup.string().required("Campo requerido"),
    HCNID: Yup.string().required("Campo requerido"),
    ClinicalCaseID: Yup.string().required("Campo requerido"),
    Difficulty: Yup.string()
      .matches(/^[0-9]*$/)
      .required("Campo requerido"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: activitySchema,
    onSubmit: (values, actions) => {
      setTimeout(() => {
        handleSubmit({
          ...values,
          Difficulty: parseInt(values.Difficulty),
          ClinicalCaseID: parseInt(values.ClinicalCaseID),
          HCNID: parseInt(values.HCNID),
        });
      }, 1000);
    },
  });

  const actionButtons = [
    {
      content: `${activity ? "Actualizar" : "Crear"} actividad`,
      onClick: formik.handleSubmit,
      type: "submit",
    },
    {
      content: "Cancelar",
      onClick: () => handleClose(),
      className: "btn btn-secondary ml-2",
      type: "button",
    },
  ];

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="Title">Título</label>
        <input
          type="text"
          name="Title"
          className={`form-control ${
            formik.touched.Title
              ? formik.errors.Title
                ? "is-invalid"
                : "is-valid"
              : ""
          }`}
          {...formik.getFieldProps("Title")}
        />
        <div className="invalid-feedback">{formik.errors.Title}</div>
      </div>
      <div className="form-group">
        <label htmlFor="Description">Descripción</label>
        <textarea
          type="text"
          name="Description"
          className="form-control"
          style={{ minHeight: "100px" }}
          className={`form-control ${
            formik.touched.Description
              ? formik.errors.Description
                ? "is-invalid"
                : "is-valid"
              : ""
          }`}
          {...formik.getFieldProps("Description")}
        />
        <div className="invalid-feedback">{formik.errors.Description}</div>
      </div>
      <div className="form-group">
        <label htmlFor="Type">Tipo</label>
        <select
          name="Type"
          id="Type"
          className={`form-control ${
            formik.touched.Type
              ? formik.errors.Type
                ? "is-invalid"
                : "is-valid"
              : ""
          }`}
          {...formik.getFieldProps("Type")}
        >
          <option value="">Seleccionar</option>
          <option value="Calificable">Calificable</option>
          <option value="Prueba">No calificable</option>
        </select>
        <div className="invalid-feedback">{formik.errors.Type}</div>
      </div>
      <div className="form-group">
        <label htmlFor="LimitDate">Fecha de entrega</label>
        <input
          type="datetime-local"
          name="LimitDate"
          className={`form-control ${
            formik.touched.LimitDate
              ? formik.errors.LimitDate
                ? "is-invalid"
                : "is-valid"
              : ""
          }`}
          {...formik.getFieldProps("LimitDate")}
        />
        <div className="invalid-feedback">{formik.errors.LimitDate}</div>
      </div>
      <div className="form-group">
        <label htmlFor="HCNID">Historia Clínica Nutricional asociada</label>
        <div className="row">
          <div className="col-10">
            <select
              name="HCNID"
              id="HCNID"
              className="form-control"
              className={`form-control ${
                formik.touched.HCNID
                  ? formik.errors.HCNID
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
              {...formik.getFieldProps("HCNID")}
            >
              <option value="">Seleccionar</option>
              {hcnList.map(({ ID }) => (
                <option value={ID} key={ID}>
                  {ID}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">{formik.errors.HCNID}</div>
          </div>
          <div className="col-2 text-right">
            <button
              className="btn btn-primary"
              onClick={(event) => {
                event.preventDefault();
                //window.open(`/clinical-cases/${}`);
              }}
            >
              Ver
            </button>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="ClinicalCaseID">Caso Clínico asociado</label>
        <div className="row">
          <div className="col-10">
            <select
              name="ClinicalCaseID"
              id="ClinicalCaseID"
              className={`form-control ${
                formik.touched.ClinicalCaseID
                  ? formik.errors.ClinicalCaseID
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
              {...formik.getFieldProps("ClinicalCaseID")}
            >
              <option value="">Seleccionar</option>
              {ccasesList.map(({ ID, Title }) => (
                <option value={ID} key={ID}>
                  {Title}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">
              {formik.errors.ClinicalCaseID}
            </div>
          </div>
          <div className="col-2 text-right">
            <button
              className="btn btn-primary"
              onClick={(event) => {
                event.preventDefault();
                if (formik.values.ClinicalCaseID !== "")
                  window.open(
                    `/clinical-cases/${formik.values.ClinicalCaseID}`
                  );
              }}
            >
              Ver
            </button>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="Difficulty">Dificultad</label>
        <select
          name="Difficulty"
          id="Difficulty"
          className="form-control"
          className={`form-control ${
            formik.touched.Difficulty
              ? formik.errors.Difficulty
                ? "is-invalid"
                : "is-valid"
              : ""
          }`}
          {...formik.getFieldProps("Difficulty")}
        >
          {[1, 2, 3, 4, 5].map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
        <div className="invalid-feedback">{formik.errors.Difficulty}</div>
      </div>

      {actionButtons && (
        <div className="text-right">
          {actionButtons.map((action, index) => {
            const { content, ...props } = action;
            return (
              <button
                className={
                  props.className ? props.className : "btn btn-primary"
                }
                disabled={formik.isSubmitting}
                key={index}
                {...props}
              >
                {content}
                {props.type === "submit" && formik.isSubmitting && (
                  <CircularProgress
                    className="ml-2"
                    size={10}
                    color="inherit"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </form>
  );
}

export default ActivityForm;
