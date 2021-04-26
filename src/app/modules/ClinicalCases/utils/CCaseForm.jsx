import { useFormik } from "formik";
import * as Yup from "yup";
import { CircularProgress } from "@material-ui/core";

function CCaseForm(props) {
  const { handleSubmit, handleClose, clinical_case } = props;

  const initialValues = {
    Title: clinical_case ? clinical_case.Title : "",
    Description: clinical_case ? clinical_case.Description : "",
    Media: clinical_case ? clinical_case.Media : "",
  };

  const activitySchema = Yup.object().shape({
    Title: Yup.string().required("Campo requerido"),
    Description: Yup.string().required("Campo requerido"),
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
        actions.setSubmitting(false);
      }, 1000);
    },
  });

  const handleInputsChange = async (event) => {
    if (event.target.type === "file") {
      let blobPDF = new Blob([event.target.files[0]], {
        type: "application/pdf",
      });
      let reader = new FileReader();
      reader.readAsDataURL(blobPDF);
      reader.onloadend = () => {
        let value = reader.result.split(",")[1];
        formik.handleChange(event);
        formik.setFieldValue("Media", value);
      };
    }
  };

  const actionButtons = [
    {
      content: `${clinical_case ? "Actualizar" : "Crear"} Caso Clínico`,
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
    <form>
      <div className="form-group">
        <label htmlFor="Title">Título</label>
        <input
          type="text"
          name="Title"
          className="form-control"
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
        <label htmlFor="Media">Archivo</label>
        <input
          type="file"
          name="Media"
          className="ml-2"
          onChange={handleInputsChange}
        />
        <div className="invalid-feedback">{formik.errors.Media}</div>
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

export default CCaseForm;
