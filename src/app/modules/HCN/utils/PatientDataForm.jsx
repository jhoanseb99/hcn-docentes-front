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
            {...formik.getFieldProps("PatientData_FullName")}
          />
          {hasFeedback && (
            <button
              type="button"
              className="btn btn-primary ml-3"
              name="PatientData_FullName"
              onClick={handleClick}
            >
              +
            </button>
          )}
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
              {...formik.getFieldProps("PatientData_Birthdate")}
            />
            {hasFeedback && (
              <button
                type="button"
                className="btn btn-primary ml-3"
                name="PatientData_Birthdate"
                onClick={handleClick}
              >
                +
              </button>
            )}
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
              {...formik.getFieldProps("PatientData_Gender")}
            >
              <option value="">Seleccionar</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </select>
            {hasFeedback && (
              <button
                type="button"
                className="btn btn-primary ml-3"
                name="PatientData_Gender"
                onClick={handleClick}
              >
                +
              </button>
            )}
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
              {...formik.getFieldProps("PatientData_CivilStatus")}
            >
              <option value="">Seleccionar</option>
              <option value="Married">Casado/a</option>
              <option value="Single">Soltero/a</option>
            </select>
            {hasFeedback && (
              <button
                type="button"
                className="btn btn-primary ml-3"
                name="PatientData_CivilStatus"
                onClick={handleClick}
              >
                +
              </button>
            )}
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
            {...formik.getFieldProps("PatientData_EPS")}
          />
          {hasFeedback && (
            <button
              type="button"
              className="btn btn-primary ml-3"
              name="PatientData_EPS"
              onClick={handleClick}
            >
              +
            </button>
          )}
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
            {...formik.getFieldProps("PatientData_Telephone")}
          />
          {hasFeedback && (
            <button
              type="button"
              className="btn btn-primary ml-3"
              name="PatientData_Telephone"
              onClick={handleClick}
            >
              +
            </button>
          )}
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
            {...formik.getFieldProps("PatientData_Occupation")}
          />
          {hasFeedback && (
            <button
              type="button"
              className="btn btn-primary ml-3"
              name="PatientData_Occupation"
              onClick={handleClick}
            >
              +
            </button>
          )}
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
            {...formik.getFieldProps("PatientData_Interpretation")}
          />
          {hasFeedback && (
            <div>
              <button
                type="button"
                className="btn btn-primary ml-3"
                name="PatientData_Interpretation"
                onClick={handleClick}
              >
                +
              </button>
            </div>
          )}
        </div>
        {displayFields["PatientData_Interpretation"].Feedback ? (
          <textarea type="text" className="form-control" />
        ) : null}
      </div>

      <textarea
        type="text"
        name="PatientData_Feedback"
        className="form-control"
        {...formik.getFieldProps("PatientData_Feedback")}
      />
    </>
  );
}

export default PatientDataForm;
