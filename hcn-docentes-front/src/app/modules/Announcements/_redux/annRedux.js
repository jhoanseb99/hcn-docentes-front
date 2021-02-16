import { createSlice } from "@reduxjs/toolkit";

import * as requestFromServer from "./annCrud";
import * as authRedux from "../../Auth/_redux/authRedux";

const initAnnState = {
  list: [],
};

const actionTypes = {
  set_list: "SET_LIST"
};


const setList = list => dispatch => {
  dispatch(annSlice.actions.setList({ type: actionTypes.set_list, list }));
};

/* API - get all announcement list */
const getAnnList = () => (dispatch, getState) => {
  return requestFromServer.getAllAnnouncements()
  .then(response => {
    console.log(response);
    if(response.status === 403) dispatch(authRedux.actions.setSessionExpired());
    if(!response.ok) throw new Error("Ocurrió un error");
    return response.json();
  })
  .then(response => {
    dispatch(annSlice.actions.setList({ type: actionTypes.set_list, list: response }));
  })
  .catch(err => {
    console.log(err);
  });
};

export const actions = {
  setList,
  getAnnList,
};

export const annSlice = createSlice({
  name: "Adv",
  initialState: initAnnState,
  reducers: {
    setList: (state, action) => {
      const { list } = action.payload;
      state.table = list;
    },
  }
});