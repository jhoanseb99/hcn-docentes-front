import { createSlice } from "@reduxjs/toolkit";

import * as requestFromServer from "./activitiesCrud";
import * as authRedux from "../../Auth/_redux/authRedux";

const initActivitiesState = {
  list: [],
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
  .then(response => {
    console.log(response);
    if(response.status === 403) dispatch(authRedux.actions.setSessionExpired());
    if(!response.ok) throw new Error("Ocurrió un error");
    return response.json();
  })
  .then(response => {
    dispatch(activitiesSlice.actions.setList({ type: actionTypes.set_list, list: response }));
  })
  .catch(err => {
    console.log(err);
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
      state.list = list;
    },
  }
});