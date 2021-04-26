import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../_redux/ccasesRedux";
import BaseModal from "../../../components/UI/BaseModal.jsx";
import CCaseForm from "../utils/CCaseForm";

function CreateCCaseDialog({ open, handleClose }) {
  const dispatch = useDispatch();

  const handleCreate = (values) => {
    dispatch(actions.createCCase(values)).then(() => handleClose());
  };

  return (
    <BaseModal
      title="Crear nuevo caso clínico"
      open={open}
      handleClose={handleClose}
    >
      <CCaseForm handleSubmit={handleCreate} handleClose={handleClose} />
    </BaseModal>
  );
}

export default CreateCCaseDialog;
