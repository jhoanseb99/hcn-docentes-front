import React from "react";
import { useDispatch } from "react-redux";

import { actions } from "../_redux/ccasesRedux";
import BaseModal from "../../../components/UI/BaseModal.jsx";
import CCaseForm from "../utils/CCaseForm";

function UpdateCCaseDialog({ open, handleClose, clinical_case }) {
  const dispatch = useDispatch();

  const handleUpdate = (values) => {
    dispatch(
      actions.updateCCase({ ID: clinical_case.ID, ...values })
    ).then(() => handleClose());
  };

  return (
    <BaseModal
      title="Actualizar caso clínico"
      open={open}
      handleClose={handleClose}
    >
      <CCaseForm
        clinical_case={clinical_case}
        handleSubmit={handleUpdate}
        handleClose={handleClose}
      />
    </BaseModal>
  );
}

export default UpdateCCaseDialog;
