function GeneralDataForm(props) {
  const { formik, handleClick, displayFields, hasFeedback = false } = props;
  return (
    <>
      <div className="form-row">
        <div className="form-group col">
          <label htmlFor="GeneralData_ValorationDate">
            Fecha de valoración
          </label>
          <div className="d-flex flex-row">
            <input
              type="date"
              name="GeneralData_ValorationDate"
              className="form-control"
              disabled={hasFeedback}
              {...formik.getFieldProps("GeneralData_ValorationDate")}
            />
          </div>
          {displayFields["GeneralData_ValorationDate"].Feedback ? (
            <textarea type="text" className="form-control" />
          ) : null}
        </div>
        <div className="form-group col">
          <label htmlFor="GeneralData_AdmissionDate">Fecha de admisión</label>
          <div className="d-flex flex-row">
            <input
              type="date"
              name="GeneralData_AdmissionDate"
              className="form-control"
              disabled={hasFeedback}
              {...formik.getFieldProps("GeneralData_AdmissionDate")}
            />
          </div>
          {displayFields["GeneralData_AdmissionDate"].Feedback ? (
            <textarea type="text" className="form-control" />
          ) : null}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="GeneralData_HCNNumber">Número HCN</label>
        <div className="d-flex flex-row">
          <input
            type="number"
            name="GeneralData_HCNNumber"
            className="form-control"
            disabled={hasFeedback}
            {...formik.getFieldProps("GeneralData_HCNNumber")}
          />
        </div>
        {displayFields["GeneralData_HCNNumber"].Feedback ? (
          <textarea type="text" className="form-control" />
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="GeneralData_Room">Habitación</label>
        <div className="d-flex flex-row">
          <input
            type="number"
            name="GeneralData_Room"
            className="form-control"
            disabled={hasFeedback}
            {...formik.getFieldProps("GeneralData_Room")}
          />
        </div>
        {displayFields["GeneralData_Room"].Feedback ? (
          <textarea type="text" className="form-control" />
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="GeneralData_Interpretation">Interpretación</label>
        <div className="d-flex flex-row">
          <textarea
            type="text"
            name="GeneralData_Interpretation"
            className="form-control"
            disabled={hasFeedback}
            {...formik.getFieldProps("GeneralData_Interpretation")}
          />
        </div>
        {displayFields["GeneralData_Interpretation"].Feedback ? (
          <textarea type="text" className="form-control" />
        ) : null}
      </div>

      {hasFeedback && (
        <div className="form-group">
          <label htmlFor="GeneralData_Feedback">Comentario docente</label>
          <textarea
            type="text"
            name="GeneralData_Feedback"
            className="form-control"
            {...formik.getFieldProps("GeneralData_Feedback")}
          />
        </div>
      )}
    </>
  );
}

export default GeneralDataForm;
