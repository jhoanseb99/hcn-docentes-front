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
              {...formik.getFieldProps("GeneralData_ValorationDate")}
            />
            {hasFeedback && (
              <button
                type="button"
                className="btn btn-primary ml-3"
                name="GeneralData_ValorationDate"
                onClick={handleClick}
              >
                +
              </button>
            )}
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
              {...formik.getFieldProps("GeneralData_AdmissionDate")}
            />
            {hasFeedback && (
              <button
                type="button"
                className="btn btn-primary ml-3"
                name="GeneralData_AdmissionDate"
                onClick={handleClick}
              >
                +
              </button>
            )}
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
            {...formik.getFieldProps("GeneralData_HCNNumber")}
          />
          {hasFeedback && (
            <button
              type="button"
              className="btn btn-primary ml-3"
              name="GeneralData_HCNNumber"
              onClick={handleClick}
            >
              +
            </button>
          )}
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
            {...formik.getFieldProps("GeneralData_Room")}
          />
          {hasFeedback && (
            <button
              type="button"
              className="btn btn-primary ml-3"
              name="GeneralData_Room"
              onClick={handleClick}
            >
              +
            </button>
          )}
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
            {...formik.getFieldProps("GeneralData_Interpretation")}
          />
          {hasFeedback && (
            <div>
              <button
                type="button"
                className="btn btn-primary ml-3"
                name="GeneralData_Interpretation"
                onClick={handleClick}
              >
                +
              </button>
            </div>
          )}
        </div>
        {displayFields["GeneralData_Interpretation"].Feedback ? (
          <textarea type="text" className="form-control" />
        ) : null}
      </div>

      <textarea
        type="text"
        name="GeneralData_Feedback"
        className="form-control"
        {...formik.getFieldProps("GeneralData_Feedback")}
      />
    </>
  );
}

export default GeneralDataForm;
