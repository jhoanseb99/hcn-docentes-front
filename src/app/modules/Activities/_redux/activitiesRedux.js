import { createSlice } from "@reduxjs/toolkit";
import { notificationActions } from "app/components/_redux/notificationRedux";
import * as requestFromServer from "./activitiesCrud";
import * as authRedux from "../../Auth/_redux/authRedux";

import { ACTIVITIES } from "../../../const/data";

const initActivitiesState = {
  activitieslist: [],
};

const actionTypes = {
  set_list: "SET_LIST",
};

const setList = (list) => (dispatch) => {
  dispatch(
    activitiesSlice.actions.setList({ type: actionTypes.set_list, list })
  );
};

const getActivitiesList = () => (dispatch, getState) => {
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

const updateActivity = (props) => (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  return requestFromServer
    .updateActivity({ ...props, CourseID }, getState().auth.authToken)
    .then(() => {
      notificationActions.setNotification("Actividad actualizada exitosamente");
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
  console.log(userId);
  return requestFromServer
    .createActivity(
      { ...props, CourseID, TeacherID: userId },
      getState().auth.authToken
    )
    .then(() => {
      notificationActions.setNotification("Actividad creada exitosamente");
      dispatch(getActivitiesList());
    })
    .catch((err) => {
      console.log(err);
      dispatch(notificationActions.setNotification(err.message, "error"));
    });
};

const deleteActivity = (id) => (dispatch, getState) => {
  return requestFromServer
    .deleteActivity({ ID: id }, getState().auth.authToken)
    .then(() => {
      notificationActions.setNotification("Actividad eliminada exitosamente");
      dispatch(getActivitiesList());
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
  },
});
