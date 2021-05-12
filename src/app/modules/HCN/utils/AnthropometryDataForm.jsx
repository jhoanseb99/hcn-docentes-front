function AnthropometryDataForm(props) {
  const { formik, handleClick, displayFields, hasFeedback = false } = props;
  return (
    <>
      <div className="form-row">
        <div className="form-group col">
          <label htmlFor="Anthropometry_Weight_Actual">Peso actual</label>
          <div className="d-flex flex-row">
            <input
              type="number"
              name="Anthropometry_Weight_Actual"
              className="form-control"
              {...formik.getFieldProps("Anthropometry_Weight_Actual")}
            />
            {hasFeedback && (
              <button
                type="button"
                className="btn btn-primary ml-3"
                name="Anthropometry_Weight_Actual"
                onClick={handleClick}
              >
                +
              </button>
            )}
          </div>
          {displayFields["Anthropometry_Weight_Actual"].Feedback ? (
            <textarea type="text" className="form-control" />
          ) : null}
        </div>
        <div className="form-group col">
          <label htmlFor="Anthropometry_Weight_Usual">Peso usual</label>
          <div className="d-flex flex-row">
            <input
              type="number"
              name="Anthropometry_Weight_Usual"
              className="form-control"
              {...formik.getFieldProps("Anthropometry_Weight_Usual")}
            />
            {hasFeedback && (
              <button
                type="button"
                className="btn btn-primary ml-3"
                name="Anthropometry_Weight_Usual"
                onClick={handleClick}
              >
                +
              </button>
            )}
          </div>
          {displayFields["Anthropometry_Weight_Usual"].Feedback ? (
            <textarea type="text" className="form-control" />
          ) : null}
        </div>
        <div className="form-group col">
          <label htmlFor="Anthropometry_Weight_Reference">
            Peso de referencia
          </label>
          <div className="d-flex flex-row">
            <input
              type="number"
              name="Anthropometry_Weight_Reference"
              className="form-control"
              {...formik.getFieldProps("Anthropometry_Weight_Reference")}
            />
            {hasFeedback && (
              <button
                type="button"
                className="btn btn-primary ml-3"
                name="Anthropometry_Weight_Reference"
                onClick={handleClick}
              >
                +
              </button>
            )}
          </div>
          {displayFields["Anthropometry_Weight_Reference"].Feedback ? (
            <textarea type="text" className="form-control" />
          ) : null}
        </div>
        <div className="form-group col">
          <label htmlFor="Anthropometry_Weight_ChangeWeight">
            Cambio de peso
          </label>
          <div className="d-flex flex-row">
            <input
              type="number"
              name="Anthropometry_Weight_ChangeWeight"
              className="form-control"
              {...formik.getFieldProps("Anthropometry_Weight_ChangeWeight")}
            />
            {hasFeedback && (
              <button
                type="button"
                className="btn btn-primary ml-3"
                name="Anthropometry_Weight_ChangeWeight"
                onClick={handleClick}
              >
                +
              </button>
            )}
          </div>
          {displayFields["Anthropometry_Weight_ChangeWeight"].Feedback ? (
            <textarea type="text" className="form-control" />
          ) : null}
        </div>

        <textarea
          type="text"
          name="Anthropometry_Weight_Feedback"
          className="form-control"
          {...formik.getFieldProps("Anthropometry_Weight_Feedback")}
        />
      </div>
      <div className="form-row">
        <div className="form-group col">
          <label htmlFor="Anthropometry_TricipitalFold_Value">
            Pliegue tricipital
          </label>
          <div className="d-flex flex-row">
            <input
              type="number"
              name="Anthropometry_TricipitalFold_Value"
              className="form-control"
              {...formik.getFieldProps("Anthropometry_TricipitalFold_Value")}
            />
            {hasFeedback && (
              <button
                type="button"
                className="btn btn-primary ml-3"
                name="Anthropometry_TricipitalFold_Value"
                onClick={handleClick}
              >
                +
              </button>
            )}
          </div>
          {displayFields["Anthropometry_TricipitalFold_Value"].Feedback ? (
            <textarea
              type="text"
              name="Anthropometry_TricipitalFold_Feedback"
              className="form-control"
              {...formik.getFieldProps("Anthropometry_TricipitalFold_Feedback")}
            />
          ) : null}
        </div>
        <div className="form-group col">
          <label htmlFor="Anthropometry_SubscapularFold_Value">
            Pliegue subescapular
          </label>
          <div className="d-flex flex-row">
            <input
              type="number"
              name="Anthropometry_SubscapularFold_Value"
              className="form-control"
              {...formik.getFieldProps("Anthropometry_SubscapularFold_Value")}
            />
            {hasFeedback && (
              <button
                type="button"
                className="btn btn-primary ml-3"
                name="Anthropometry_SubscapularFold_Value"
                onClick={handleClick}
              >
                +
              </button>
            )}
          </div>
          {displayFields["Anthropometry_SubscapularFold_Value"].Feedback ? (
            <textarea
              type="text"
              name="Anthropometry_SubscapularFold_Feedback"
              className="form-control"
              {...formik.getFieldProps(
                "Anthropometry_SubscapularFold_Feedback"
              )}
            />
          ) : null}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col">
          <label htmlFor="Anthropometry_BrachialPerimeter_Value">
            Perímetro braquial
          </label>
          <div className="d-flex flex-row">
            <input
              type="number"
              name="Anthropometry_BrachialPerimeter_Value"
              className="form-control"
              {...formik.getFieldProps("Anthropometry_BrachialPerimeter_Value")}
            />
            {hasFeedback && (
              <button
                type="button"
                className="btn btn-primary ml-3"
                name="Anthropometry_BrachialPerimeter_Value"
                onClick={handleClick}
              >
                +
              </button>
            )}
          </div>
          {displayFields["Anthropometry_BrachialPerimeter_Value"].Feedback ? (
            <textarea
              type="text"
              name="Anthropometry_BrachialPerimeter_Feedback"
              className="form-control"
              {...formik.getFieldProps(
                "Anthropometry_BrachialPerimeter_Feedback"
              )}
            />
          ) : null}
        </div>
        <div className="form-group col">
          <label htmlFor="Anthropometry_AbdominalPerimeter_Value">
            Perímetro abdominal
          </label>
          <div className="d-flex flex-row">
            <input
              type="number"
              name="Anthropometry_AbdominalPerimeter_Value"
              className="form-control"
              {...formik.getFieldProps(
                "Anthropometry_AbdominalPerimeter_Value"
              )}
            />
            {hasFeedback && (
              <button
                type="button"
                className="btn btn-primary ml-3"
                name="Anthropometry_AbdominalPerimeter_Value"
                onClick={handleClick}
              >
                +
              </button>
            )}
          </div>
          {displayFields["Anthropometry_AbdominalPerimeter_Value"].Feedback ? (
            <textarea
              type="text"
              name="Anthropometry_AbdominalPerimeter_Feedback"
              className="form-control"
              {...formik.getFieldProps(
                "Anthropometry_AbdominalPerimeter_Feedback"
              )}
            />
          ) : null}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col">
          <label htmlFor="Anthropometry_Height_Value">Altura (cm)</label>
          <div className="d-flex flex-row">
            <input
              type="number"
              name="Anthropometry_Height_Value"
              className="form-control"
              {...formik.getFieldProps("Anthropometry_Height_Value")}
            />
            {hasFeedback && (
              <button
                type="button"
                className="btn btn-primary ml-3"
                name="Anthropometry_Height_Value"
                onClick={handleClick}
              >
                +
              </button>
            )}
          </div>
          {displayFields["Anthropometry_Height_Value"].Feedback ? (
            <textarea
              type="text"
              name="Anthropometry_Height_Feedback"
              className="form-control"
              {...formik.getFieldProps("Anthropometry_Height_Feedback")}
            />
          ) : null}
        </div>
        <div className="form-group col">
          <label htmlFor="Anthropometry_Structure_Value">Estructura</label>
          <div className="d-flex flex-row">
            <input
              type="number"
              name="Anthropometry_Structure_Value"
              className="form-control"
              {...formik.getFieldProps("Anthropometry_Structure_Value")}
            />
            {hasFeedback && (
              <button
                type="button"
                className="btn btn-primary ml-3"
                name="Anthropometry_Structure_Value"
                onClick={handleClick}
              >
                +
              </button>
            )}
          </div>
          {displayFields["Anthropometry_Structure_Value"].Feedback ? (
            <textarea
              type="text"
              name="Anthropometry_Structure_Feedback"
              className="form-control"
              {...formik.getFieldProps("Anthropometry_Structure_Feedback")}
            />
          ) : null}
        </div>
        <div className="form-group col">
          <label htmlFor="Anthropometry_BMI_Value">BMI</label>
          <div className="d-flex flex-row">
            <input
              type="number"
              name="Anthropometry_BMI_Value"
              className="form-control"
              {...formik.getFieldProps("Anthropometry_BMI_Value")}
            />
            {hasFeedback && (
              <button
                type="button"
                className="btn btn-primary ml-3"
                name="Anthropometry_BMI_Value"
                onClick={handleClick}
              >
                +
              </button>
            )}
          </div>
          {displayFields["Anthropometry_BMI_Value"].Feedback ? (
            <textarea type="text" className="form-control" />
          ) : null}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="Anthropometry_Interpretation">Interpretación</label>
        <div className="d-flex flex-row">
          <textarea
            type="text"
            name="Anthropometry_Interpretation"
            className="form-control"
            {...formik.getFieldProps("Anthropometry_Interpretation")}
          />
          {hasFeedback && (
            <div>
              <button
                type="button"
                className="btn btn-primary ml-3"
                name="Anthropometry_Interpretation"
                onClick={handleClick}
              >
                +
              </button>
            </div>
          )}
        </div>
        {displayFields["Anthropometry_Interpretation"].Feedback ? (
          <textarea type="text" className="form-control" />
        ) : null}
      </div>

      <label htmlFor="Anthropometry_Feedback">Comentario docente</label>
      <textarea
        type="text"
        name="Anthropometry_Feedback"
        className="form-control"
        {...formik.getFieldProps("Anthropometry_Feedback")}
      />
    </>
  );
}

export default AnthropometryDataForm;
