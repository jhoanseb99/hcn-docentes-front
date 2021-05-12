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
          list: data.filter((value) => value.Displayable) ?? [],
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
      dispatch(notificationActions.setNotification("HCN creada exitosamente"));
      dispatch(getHcnList());
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
      dispatch(
        notificationActions.setNotification("HCN actualizada exitosamente")
      );
    })
    .catch((err) => {
      console.log(err);
      dispatch(notificationActions.setNotification(err.message, "error"));
    });
};

const updateFeedbackHcn = (props, activity) => async (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return requestFromServer
    .updateHcn(props, authToken)
    .then(() => {
      if (!activity.Reviewed) return;
      return requestFromServer.updateSolvedHcn(
        {
          ActivityID: activity.ActivityID,
          Solver: activity.Solver,
          Reviewed: 0,
        },
        authToken
      );
    })
    .then(() => {
      dispatch(
        notificationActions.setNotification("HCN actualizada exitosamente")
      );
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
      dispatch(
        notificationActions.setNotification("HCN calificada exitosamente")
      );
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
      dispatch(notificationActions.setNotification("HCN añadida exitosamente"));
      dispatch(getHcnListByCourse());
    })
    .catch((err) => {
      console.log(err);
      dispatch(notificationActions.setNotification(err.message, "error"));
    });
};

const deleteHcn = (id) => async (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  const authToken = getState().auth.authToken;
  return (
    requestFromServer
      //.deleteHcn({ ID: id }, authToken)
      .visibilityHcn({ HCNID: id, CourseID, Displayable: 0 }, authToken)
      .then(() => {
        dispatch(getHcnListByCourse());
        dispatch(
          notificationActions.setNotification("HCN eliminada exitosamente")
        );
      })
      .catch((err) => {
        console.log(err);
        dispatch(notificationActions.setNotification(err.message, "error"));
      })
  );
};

const removeHcn = (id) => async (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  console.log(CourseID);
  const authToken = getState().auth.authToken;
  return requestFromServer
    .removeHcn({ HCNID: id, CourseID }, authToken)
    .then(() => {
      dispatch(getHcnListByCourse());
      dispatch(
        notificationActions.setNotification("HCN removida exitosamente")
      );
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
  updateFeedbackHcn,
  addHcnToCourse,
  feedbackHcn,
  deleteHcn,
  removeHcn,
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
