import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions as hcnRedux } from "../_redux/hcnRedux";

import BaseModal from "../../../components/UI/BaseModal.jsx";

function AddHcnDialog({ open, handleClose }) {
  const { hcnList } = useSelector(state => state.hcn);
  const dispatch = useDispatch();

  const [ hcn_id, setHcnId ] = React.useState(undefined);

  const validateInputs = () => {
    let ok = true;
    ok = ok && (hcn_id);
    return ok;
  };

  const handleAdd = () => {
    if(!validateInputs()) return;
    dispatch(hcnRedux.addHcnToCourse(parseInt(hcn_id)))
    .then(() => handleClose())
  };


  return (
    <BaseModal
      title="Agregar caso clínico"
      open={open}
      handleClose={() => handleClose()}
      actions={[
        {
          content: "Añadir",
          onClick: () => handleAdd()
        },
        {
          content: "Cancelar",
          onClick: () => handleClose(),
          className: "btn btn-secondary"
        }
      ] }
    >
      <form>
        <div className="form-group">
          <label htmlFor="Description">Casos clínicos</label>
          <select 
            name="Type" 
            id="Type" 
            className="form-control"
            value={hcn_id}
            onChange={event => setHcnId(event.target.value)}
          >
            <option value="">Seleccionar</option>
            {hcnList.map(({ ID }) => (
              <option value={ ID } key={ ID }>{ ID }</option>
            ))}
          </select>
        </div>
      </form>
    </BaseModal>
  )
}

export default AddHcnDialog;