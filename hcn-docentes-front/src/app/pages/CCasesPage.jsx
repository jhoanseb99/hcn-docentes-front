import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { actions } from "../modules/ClinicalCases/_redux/ccasesRedux";
import CreateCCaseDialog from "../modules/ClinicalCases/components/createCCaseDialog";
import BaseDialog from "../components/UI/BaseDialog";

function CCasesPage() {
  const { ccasesList } = useSelector(state => state.clinicalCases);
  const dispatch = useDispatch();

  const [ openCreateDialog, setOpenCreateDialog ] = React.useState(false);
  const [ openAddDialog, setOpenAddDialog ] = React.useState(false);

  React.useEffect(() => {
    dispatch(actions.getCCasesList());
  }, [dispatch]);

  return (
    <div className="container">

      {/* Header */}
      <div className="row pb-5">
        <div className="col">
          <h3 className="text-dark">Casos Clínicos</h3>
        </div>
        <div className="col text-right">
          <div className="align-self-center ml-3">
            <a
              className="btn btn-primary btn-circle font-weight-bolder"
              onClick={() => setOpenAddDialog(true)}
            >
              Agregar
            </a>
            <a
              className="btn btn-primary btn-circle font-weight-bolder ml-2"
              onClick={() => setOpenCreateDialog(true)}
            >
              +
            </a>
          </div>
        </div>
      </div>

      {/* anuncios */}
      {ccasesList.map((value, index) => (
        <div key={index} className="row">
          {/* Card */}
          <div className="card custom-card p-3 mb-5 bg-white rounded">
            {/* Card::body */}
            <div className="card-body pt-3">
              {/* Card::body::title */}
              <div className="card-title">
                <div className="row">
                  <div className="col">
                    <strong className="align-self-center">{ value.Title }</strong>
                  </div>
                  <div className="col text-right">
                    {/* <a className="btn btn-info font-weight-bolder font-size-sm mr-3">ver</a> */}
                    {/* <a className="btn btn-info font-weight-bolder font-size-sm mr-3">editar</a> */}
                    <a className="btn btn-danger font-weight-bolder font-size-sm mr-3">eliminar</a>
                  </div>
                </div>
              </div>
              {/* Card::body::info */}
              <div className="card-body p-0">
                { value.Description }
              </div>
              <div className="card-body p-0 pt-2">
                <small className="text-muted font-weight-bold d-block">
                  { moment(value.CreationDate).format("DD-MM-YYYY") }
                </small>
              </div>
              <div className="card-body p-0 pt-2">
                <strong>Contiene:</strong>
                <label htmlFor="labelMedia">{ value.Media }</label>
              </div>
            </div>
          </div>
        </div>
      ))}

      <CreateCCaseDialog
        open={openCreateDialog}
        handleClose={() => setOpenCreateDialog(false)}
      />

      <BaseDialog
        title="Agregar caso clínico"
        open={openAddDialog}
        handleClose={() => setOpenAddDialog(false)}
        actions={[
          {
            content: "Añadir",
            onClick: () => ({})
          },
          {
            content: "Cancelar",
            onClick: () => setOpenAddDialog(false),
            className: "btn btn-secondary"
          }
        ] }
      >
        <form>
          <div className="form-group">
            <label htmlFor="Description">Casos clínicos</label>
            <select name="Type" id="Type" className="form-control">
              <option value={[]}>Seleccionar</option>
            </select>
          </div>
        </form>
      </BaseDialog>
    </div>
  );
}

export default CCasesPage;