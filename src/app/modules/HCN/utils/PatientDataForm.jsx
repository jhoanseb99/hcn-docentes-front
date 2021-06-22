function PatientDataForm(props) {
  const { formik, handleClick, displayFields, hasFeedback = false } = props;
  return (
    <>
      <div className="form-group">
        <label htmlFor="PatientData_FullName">Nombre Completo</label>
        <div className="d-flex flex-row">
          <input
            type="text"
            name="PatientData_FullName"
            className="form-control"
            disabled={hasFeedback}
            {...formik.getFieldProps("PatientData_FullName")}
          />
        </div>
        {displayFields["PatientData_FullName"].Feedback ? (
          <textarea type="text" className="form-control" />
        ) : null}
      </div>
      <div className="form-row">
        <div className="form-group col-6">
          <label htmlFor="PatientData_Birthdate">Fecha de cumpleaños</label>
          <div className="d-flex flex-row">
            <input
              type="date"
              name="PatientData_Birthdate"
              className="form-control"
              disabled={hasFeedback}
              {...formik.getFieldProps("PatientData_Birthdate")}
            />
          </div>
          {displayFields["PatientData_Birthdate"].Feedback ? (
            <textarea type="text" className="form-control" />
          ) : null}
        </div>
        <div className="form-group col-3">
          <label htmlFor="PatientData_Gender">Género</label>
          <div className="d-flex flex-row">
            <select
              type="text"
              name="PatientData_Gender"
              className="form-control"
              disabled={hasFeedback}
              {...formik.getFieldProps("PatientData_Gender")}
            >
              <option value="">Seleccionar</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </select>
          </div>
          {displayFields["PatientData_Gender"].Feedback ? (
            <textarea type="text" className="form-control" />
          ) : null}
        </div>
        <div className="form-group col-3">
          <label htmlFor="PatientData_CivilStatus">Estado civil</label>
          <div className="d-flex flex-row">
            <select
              type="text"
              name="PatientData_CivilStatus"
              className="form-control"
              disabled={hasFeedback}
              {...formik.getFieldProps("PatientData_CivilStatus")}
            >
              <option value="">Seleccionar</option>
              <option value="Married">Casado/a</option>
              <option value="Single">Soltero/a</option>
            </select>
          </div>
          {displayFields["PatientData_CivilStatus"].Feedback ? (
            <textarea type="text" className="form-control" />
          ) : null}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="PatientData_EPS">EPS</label>
        <div className="d-flex flex-row">
          <input
            type="text"
            name="PatientData_EPS"
            className="form-control"
            disabled={hasFeedback}
            {...formik.getFieldProps("PatientData_EPS")}
          />
        </div>
        {displayFields["PatientData_EPS"].Feedback ? (
          <textarea type="text" className="form-control" />
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="PatientData_Telephone">Teléfono</label>
        <div className="d-flex flex-row">
          <input
            type="text"
            name="PatientData_Telephone"
            className="form-control"
            disabled={hasFeedback}
            {...formik.getFieldProps("PatientData_Telephone")}
          />
        </div>
        {displayFields["PatientData_Telephone"].Feedback ? (
          <textarea type="text" className="form-control" />
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="PatientData_Occupation">Ocupación</label>
        <div className="d-flex flex-row">
          <input
            type="text"
            name="PatientData_Occupation"
            className="form-control"
            disabled={hasFeedback}
            {...formik.getFieldProps("PatientData_Occupation")}
          />
        </div>
        {displayFields["PatientData_Occupation"].Feedback ? (
          <textarea type="text" className="form-control" />
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="PatientData_Interpretation">Interpretación</label>
        <div className="d-flex flex-row">
          <textarea
            type="text"
            name="PatientData_Interpretation"
            className="form-control"
            disabled={hasFeedback}
            {...formik.getFieldProps("PatientData_Interpretation")}
          />
        </div>
        {displayFields["PatientData_Interpretation"].Feedback ? (
          <textarea type="text" className="form-control" />
        ) : null}
      </div>

      {hasFeedback && (
        <div className="form-group">
          <label htmlFor="PatientData_Feedback">Comentario docente</label>
          <textarea
            type="text"
            name="PatientData_Feedback"
            className="form-control"
            {...formik.getFieldProps("PatientData_Feedback")}
          />
        </div>
      )}
    </>
  );
}

export default PatientDataForm;
