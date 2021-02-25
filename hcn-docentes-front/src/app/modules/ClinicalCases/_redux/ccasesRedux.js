import { createSlice } from "@reduxjs/toolkit";

import * as requestFromServer from "./ccasesCrud";
import * as authRedux from "../../Auth/_redux/authRedux";

import { CCASES } from "../../../const/data";

const initCCasesState = {
  ccasesList: [],
};

const actionTypes = {
  set_list: "SET_LIST",
};

/**
 * Get all courses list
 */
const getCCasesList = () => (dispatch, getState) => {
  return requestFromServer.getAllCCasesByCourse()
  .then(data => {
    dispatch(ccasesSlice.actions.setList({ type: actionTypes.set_list, list: data }));
  })
  .catch(err => {
    console.log(err);
    dispatch(ccasesSlice.actions.setList({ type: actionTypes.set_list, list: CCASES }));
  });
};

export const actions = {
  getCCasesList,
};

export const ccasesSlice = createSlice({
  name: "clinical-cases",
  initialState: initCCasesState,
  reducers: {
    setList: (state, action) => {
      const { list } = action.payload;
      state.ccasesList = list;
    },
  }
});