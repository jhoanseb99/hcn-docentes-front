import { createSlice } from "@reduxjs/toolkit";

import * as requestFromServer from "./hcnCrud";
import * as authRedux from "../../Auth/_redux/authRedux";

import { HCN } from "../../../const/data";

const initCCasesState = {
  hcnList: [],
  hcnListByCourse: [],
};

const actionTypes = {
  set_list: "SET_LIST",
  set_list_by_course: "SET_LIST_BY_COURSE",
};

const getHcnList = () => async (dispatch, getState) => {
  return requestFromServer.getAllHcn(getState().auth.authToken)
  .then(data => {
    dispatch(hcnSlice.actions.setList({ type: actionTypes.set_list, list: data }));
  })
  .catch(err => {
    console.log(err);
    dispatch(hcnSlice.actions.setList({ type: actionTypes.set_list, list: HCN }));
  });
};

const getHcnListByCourse = () => async (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  return requestFromServer.getAllHcnByCourse({ id: CourseID }, getState().auth.authToken)
  .then(data => {
    dispatch(hcnSlice.actions.setListByCourse({ type: actionTypes.set_list, list: data }))
  })
  .catch(err => {
    console.log(err);
  });
};

const getHcn = () => (dispatch, getState) => {
};

const createHcn = props => (dispatch, getState) => {
  return requestFromServer.createHcn(props, getState().auth.authToken)
  .then(() => {
    dispatch(getHcnListByCourse());
  })
  .catch(err => {
    console.log(err);
  });
};

const updateHcn = props => (dispatch, getState) => {
  return requestFromServer.updateHcn(props, getState().auth.authToken)
  .then(() => {
    dispatch(getHcnListByCourse());
  })
  .catch(err => {
    console.log(err);
  });
};

const addHcnToCourse = id => async (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  return requestFromServer.addHcnToCourse({ HCNID: id, CourseID }, getState().auth.authToken)
  .then(() => {
    dispatch(getHcnListByCourse());
  })
  .catch(err => {
    console.log(err);
  });
};

export const actions = {
  getHcnList,
  getHcnListByCourse,
  getHcn,
  createHcn,
  updateHcn,
  addHcnToCourse
};

export const hcnSlice = createSlice({
  name: "hcn",
  initialState: initCCasesState,
  reducers: {
    setList: (state, action) => {
      const { list } = action.payload;
      state.hcnList = list;
    },
    setListByCourse: (state, action) => {
      const { list } = action.payload;
      state.hcnListByCourse = list;
    },
    addListByCourse: (state, action) => {
      const { value } = action.payload;
      state.hcnListByCourse.push(value);
    },
  }
});