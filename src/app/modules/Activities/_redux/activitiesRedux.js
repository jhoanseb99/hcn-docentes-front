import { createSlice } from "@reduxjs/toolkit";
import { notificationActions } from "app/components/_redux/notificationRedux";
import * as requestFromServer from "./activitiesCrud";

import { ACTIVITIES } from "../../../const/data";

const initActivitiesState = {
  activitieslist: [],
  gradeList: [],
};

const actionTypes = {
  set_list: "SET_LIST",
  set_grade_list: "SET_GRADE_LIST",
};

const setList = (list) => (dispatch) => {
  dispatch(
    activitiesSlice.actions.setList({ type: actionTypes.set_list, list })
  );
};

const getActivitiesList = () => async (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  return requestFromServer
    .getAllActivities({ CourseID }, getState().auth.authToken)
    .then((data) => {
      dispatch(
        activitiesSlice.actions.setList({
          type: actionTypes.set_list,
          list: data
            .filter((value) => value.CourseID === CourseID)
            .sort(
              (a, b) => new Date(b.CreationDate) - new Date(a.CreationDate)
            ),
        })
      );
    })
    .catch((err) => {
      console.log(err);
      dispatch(notificationActions.setNotification(err.message, "error"));
      dispatch(
        activitiesSlice.actions.setList({
          type: actionTypes.set_list,
          list: ACTIVITIES,
        })
      );
    });
};

const updateActivity = (props) => async (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  return requestFromServer
    .updateActivity({ ...props, CourseID }, getState().auth.authToken)
    .then(() => {
      dispatch(
        notificationActions.setNotification(
          "Actividad actualizada exitosamente"
        )
      );
      dispatch(getActivitiesList());
    })
    .catch((err) => {
      console.log(err);
      dispatch(notificationActions.setNotification(err.message, "error"));
    });
};

const createActivity = (props) => async (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  const userId = getState().auth.user.ID;
  const authToken = getState().auth.authToken;
  return requestFromServer
    .createActivity({ ...props, CourseID, TeacherID: userId }, authToken)
    .then((activity) => {
      return requestFromServer.createSolvedHcn(
        {
          CourseID,
          OriginalHCN: props.HCNID,
          TeacherID: userId,
          ActivityID: activity.ID,
        },
        authToken
      );
    })
    .then(() => {
      dispatch(
        notificationActions.setNotification("Actividad creada exitosamente")
      );
      dispatch(getActivitiesList());
    })
    .catch((err) => {
      console.log(err);
      dispatch(notificationActions.setNotification(err.message, "error"));
    });
};

const deleteActivity = (id) => async (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return requestFromServer
    .deleteSolvedHcn({ ActivityID: id }, authToken)
    .then(() => requestFromServer.deleteActivity({ ID: id }, authToken))
    .then(() => {
      dispatch(
        notificationActions.setNotification("Actividad eliminada exitosamente")
      );
      dispatch(getActivitiesList());
    })
    .catch((err) => {
      console.log(err);
      dispatch(notificationActions.setNotification(err.message, "error"));
    });
};

const getAllSolvedHcn = (id) => async (dispatch, getState) => {
  return requestFromServer
    .getAllSolvedHcn({ id }, getState().auth.authToken)
    .then((data) => {
      dispatch(
        activitiesSlice.actions.setGradeList({
          type: actionTypes.set_grade_list,
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
  setList,
  getActivitiesList,
  updateActivity,
  createActivity,
  deleteActivity,
  getAllSolvedHcn,
};

export const activitiesSlice = createSlice({
  name: "Activies",
  initialState: initActivitiesState,
  reducers: {
    setList: (state, action) => {
      const { list } = action.payload;
      console.log(list);
      state.activitieslist = list;
    },
    setGradeList: (state, action) => {
      const { list } = action.payload;
      console.log(list);
      state.gradeList = list;
    },
  },
});
