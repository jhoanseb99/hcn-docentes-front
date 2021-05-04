import { createSlice } from "@reduxjs/toolkit";
import { notificationActions } from "app/components/_redux/notificationRedux";
import * as requestFromServer from "./hcnCrud";

import { HCN } from "../../../const/data";

const initCCasesState = {
  hcnList: [],
  hcnListByCourse: [],
  hcnObject: {},
};

const actionTypes = {
  set_list: "SET_LIST",
  set_list_by_course: "SET_LIST_BY_COURSE",
};

const getHcnList = () => async (dispatch, getState) => {
  const userId = getState().auth.user.ID;
  return requestFromServer
    .getAllHcn(undefined, getState().auth.authToken)
    .then((data) => {
      dispatch(
        hcnSlice.actions.setList({
          type: actionTypes.set_list,
          list: data.filter((value) => value.TeacherID === userId),
        })
      );
    })
    .catch((err) => {
      console.log(err);
      dispatch(notificationActions.setNotification(err.message, "error"));
      dispatch(
        hcnSlice.actions.setList({ type: actionTypes.set_list, list: HCN })
      );
    });
};

const getHcnListByCourse = () => async (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  return requestFromServer
    .getAllHcnByCourse({ CourseID }, getState().auth.authToken)
    .then((data) => {
      dispatch(
        hcnSlice.actions.setListByCourse({
          type: actionTypes.set_list,
          list: data ?? [],
        })
      );
    })
    .catch((err) => {
      console.log(err);
      dispatch(notificationActions.setNotification(err.message, "error"));
    });
};

const getHcn = (params) => async (dispatch, getState) => {
  return requestFromServer
    .getHcn(params, getState().auth.authToken)
    .catch((err) => {
      console.log(err);
      dispatch(notificationActions.setNotification(err.message, "error"));
    });
};

const createHcn = (props) => async (dispatch, getState) => {
  const userId = getState().auth.user.ID;
  return requestFromServer
    .createHcn({ ...props, TeacherID: userId }, getState().auth.authToken)
    .then(() => {
      notificationActions.setNotification("HCN creada exitosamente");
      dispatch(getHcnListByCourse());
    })
    .catch((err) => {
      console.log(err);
      dispatch(notificationActions.setNotification(err.message, "error"));
    });
};

const updateHcn = (props) => async (dispatch, getState) => {
  return requestFromServer
    .updateHcn(props, getState().auth.authToken)
    .then(() => {
      notificationActions.setNotification("HCN actualizada exitosamente");
      dispatch(getHcnListByCourse());
    })
    .catch((err) => {
      console.log(err);
      dispatch(notificationActions.setNotification(err.message, "error"));
    });
};

const feedbackHcn = (props) => async (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return requestFromServer
    .updateSolvedHcn(
      {
        ActivityID: props.ActivityID,
        Solver: props.Solver,
        Reviewed: 1,
      },
      authToken
    )
    .then(() => {
      notificationActions.setNotification("HCN calificada exitosamente");
      dispatch(getHcnListByCourse());
    })
    .catch((err) => {
      console.log(err);
      dispatch(notificationActions.setNotification(err.message, "error"));
    });
};

const addHcnToCourse = (id) => async (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  return requestFromServer
    .addHcnToCourse({ HCNID: id, CourseID }, getState().auth.authToken)
    .then(() => {
      notificationActions.setNotification("HCN añadida exitosamente");
      dispatch(getHcnListByCourse());
    })
    .catch((err) => {
      console.log(err);
      dispatch(notificationActions.setNotification(err.message, "error"));
    });
};

export const actions = {
  getHcnList,
  getHcnListByCourse,
  getHcn,
  createHcn,
  updateHcn,
  addHcnToCourse,
  feedbackHcn,
};

export const hcnSlice = createSlice({
  name: "hcn",
  initialState: initCCasesState,
  reducers: {
    setList: (state, action) => {
      const { list } = action.payload;
      state.hcnList = list;
      list.forEach((element) => {
        state.hcnObject[element.ID] = element;
      });
    },
    setListByCourse: (state, action) => {
      const { list } = action.payload;
      state.hcnListByCourse = list;
    },
    addListByCourse: (state, action) => {
      const { value } = action.payload;
      state.hcnListByCourse.push(value);
    },
  },
});
