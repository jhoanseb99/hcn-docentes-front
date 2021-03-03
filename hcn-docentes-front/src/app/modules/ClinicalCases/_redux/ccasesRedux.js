import { createSlice } from "@reduxjs/toolkit";

import * as requestFromServer from "./ccasesCrud";
import * as authRedux from "../../Auth/_redux/authRedux";

import { CCASES } from "../../../const/data";

const initCCasesState = {
  ccasesList: [],
  ccasesListByCourse: [],
};

const actionTypes = {
  set_list: "SET_LIST",
  set_list_by_course: "SET_LIST_BY_COURSE",
};

const getCCasesList = () => (dispatch, getState) => {
  return requestFromServer.getAllCCases()
  .then(data => {
    dispatch(ccasesSlice.actions.setList({ type: actionTypes.set_list, list: data }));
  })
  .catch(err => {
    console.log(err);
    dispatch(ccasesSlice.actions.setList({ type: actionTypes.set_list, list: CCASES }));
  });
};

const getCCasesListByCourse = () => (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  return requestFromServer.getAllCCasesByCourse({ id: CourseID })
  .then(async data => {
    dispatch(ccasesSlice.actions.setListByCourse({ type: actionTypes.set_list, list: [] }));
    await Promise.all(data.map(async value => {
      let ccase = await requestFromServer.getCCase({ id: value.ClinicalCaseID });
      dispatch(ccasesSlice.actions.addListByCourse({ type: actionTypes.set_list, value: ccase }));
    }))
  })
  .catch(err => {
    console.log(err);
    dispatch(ccasesSlice.actions.setListByCourse({ 
      type: actionTypes.set_list, list: CCASES.filter(value => value.CourseID === CourseID) 
    }));
  });
};

const addCCaseToCourse = id => (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  return requestFromServer.addCCaseToCourse({ ClinicalCaseID: id, CourseID })
  .then(data => {
    dispatch(getCCasesListByCourse());
  })
  .catch(err => {
    console.log(err);
  });
};

export const actions = {
  getCCasesListByCourse,
  getCCasesList,
  addCCaseToCourse,
};

export const ccasesSlice = createSlice({
  name: "clinical-cases",
  initialState: initCCasesState,
  reducers: {
    setList: (state, action) => {
      const { list } = action.payload;
      state.ccasesList = list;
    },
    setListByCourse: (state, action) => {
      const { list } = action.payload;
      state.ccasesListByCourse = list;
    },
    addListByCourse: (state, action) => {
      const { value } = action.payload;
      state.ccasesListByCourse.push(value);
    },
  }
});