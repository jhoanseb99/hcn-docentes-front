import { createSlice } from "@reduxjs/toolkit";
import { notificationActions } from "app/components/_redux/notificationRedux";
import * as requestFromServer from "./studentsCrud";

const initialState = {
  studentsList: [],
};

const actionTypes = {
  set_list: "SET_LIST",
};

const getStudentsList = (params) => async (dispatch, getState) => {
  return requestFromServer
    .getAllStudents(params, getState().auth.authToken)
    .then((data) => {
      dispatch(
        studentsSlice.actions.setList({
          type: actionTypes.set_list,
          list: data,
        })
      );
    })
    .catch((err) => {
      console.log(err);
      dispatch(notificationActions.setNotification(err.message, "error"));
    });
};

export const actions = {
  getStudentsList,
};

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setList: (state, action) => {
      const { list } = action.payload;
      state.studentsList = list;
    },
  },
});
