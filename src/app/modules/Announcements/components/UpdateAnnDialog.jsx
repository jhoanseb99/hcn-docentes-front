import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { actions } from "../_redux/annRedux";

import BaseModal from "../../../components/UI/BaseModal.jsx";

function UpdateAnnDialog({ open, handleClose, announcement }) {
  const dispatch = useDispatch();
  const initialValues = {
    Title: announcement.Title,
    Description: announcement.Description,
  };

  const annSchema = Yup.object().shape({
    Title: Yup.string().required("Campo requerido"),
    Description: Yup.string().required("Campo requerido"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: annSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setTimeout(() => {
        handleUpdate(values);
      }, 1000);
    },
  });

  const handleUpdate = (values) => {
    dispatch(
      actions.updateAnnouncement({ ...announcement, ...values })
    ).then(() => handleClose());
  };

  const actionButtons = [
    {
      content: "Actualizar anuncio",
      onClick: formik.handleSubmit,
    },
    {
      content: "Cancelar",
      onClick: () => handleClose(),
      className: "btn btn-secondary",
    },
  ];

  return (
    <BaseModal
      title="Actualizar anuncio"
      open={open}
      actions={actionButtons}
      handleClose={handleClose}
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="Title">Título del anuncio</label>
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
          <label htmlFor="Description">Contenido del anuncio</label>
          <textarea
            type="text"
            name="Description"
            className={`form-control ${
              formik.touched.Description
                ? formik.errors.Description
                  ? "is-invalid"
                  : "is-valid"
                : ""
            }`}
            {...formik.getFieldProps("Description")}
            style={{ minHeight: "150px" }}
          />
          <div className="invalid-feedback">{formik.errors.Description}</div>
        </div>
      </form>
    </BaseModal>
  );
}

export default UpdateAnnDialog;
