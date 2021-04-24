import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../_redux/activitiesRedux";

import BaseModal from "../../../components/UI/BaseModal.jsx";
import ActivityForm from "../utils/ActivityForm";

function CreateActivityDialog({ open, handleClose }) {
  const { hcnList, ccasesList } = useSelector(({ hcn, clinicalCases }) => ({
    hcnList: hcn.hcnList,
    ccasesList: clinicalCases.ccasesList,
  }));
  const dispatch = useDispatch();
  const handleCreate = (values) => {
    dispatch(actions.createActivity(values)).then(() => handleClose());
  };

  return (
    <BaseModal
      title="Crear nueva actividad"
      open={open}
      handleClose={handleClose}
      size="lg"
    >
      <ActivityForm
        hcnList={hcnList}
        handleSubmit={handleCreate}
        handleClose={handleClose}
        ccasesList={ccasesList}
      />
    </BaseModal>
  );
}

export default CreateActivityDialog;
