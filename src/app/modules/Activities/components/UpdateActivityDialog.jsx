import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../_redux/activitiesRedux";

import BaseModal from "../../../components/UI/BaseModal.jsx";
import ActivityForm from "../utils/ActivityForm";

function UpdateActivityDialog({ open, handleClose, activity }) {
  const { hcnList, ccasesList } = useSelector(({ hcn, clinicalCases }) => ({
    hcnList: hcn.hcnList,
    ccasesList: clinicalCases.ccasesList,
  }));
  const dispatch = useDispatch();

  const handleUpdate = (values) => {
    dispatch(actions.updateActivity({ ...activity, ...values })).then(() =>
      handleClose()
    );
  };

  return (
    <BaseModal
      title="Actualizar actividad"
      open={open}
      handleClose={handleClose}
      size="lg"
    >
      <ActivityForm
        hcnList={hcnList}
        handleSubmit={handleUpdate}
        handleClose={handleClose}
        ccasesList={ccasesList}
        activity={activity}
      />
    </BaseModal>
  );
}

export default UpdateActivityDialog;
