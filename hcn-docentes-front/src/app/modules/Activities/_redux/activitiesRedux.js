import { createSlice } from "@reduxjs/toolkit";
import * as requestFromServer from "./activitiesCrud";
import * as authRedux from "../../Auth/_redux/authRedux";

import { ACTIVITIES } from "../../../const/data";

const initActivitiesState = {
  activitieslist: [],
};

const actionTypes = {
  set_list: "SET_LIST"
};

// setter - table
const setList = list => dispatch => {
  dispatch(activitiesSlice.actions.setList({ type: actionTypes.set_list, list }));
};


/* API - get all activies list */
const getActivitiesList = () => (dispatch, getState) => {
  return requestFromServer.getAllActivities()
  .then(data => {
    dispatch(activitiesSlice.actions.setList({ type: actionTypes.set_list, list: data }));
  })
  .catch(err => {
    console.log(err);
    dispatch(activitiesSlice.actions.setList({ type: actionTypes.set_list, list: ACTIVITIES }));
  });
};

export const actions = {
  setList,
  getActivitiesList,
};

export const activitiesSlice = createSlice({
  name: "Activies",
  initialState: initActivitiesState,
  reducers: {
    setList: (state, action) => {
      const { list } = action.payload;
      state.activitieslist = list;
    },
  }
});