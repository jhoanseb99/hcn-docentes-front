import { createSlice } from "@reduxjs/toolkit";

import * as requestFromServer from "./coursesCrud";
import * as authRedux from "../../Auth/_redux/authRedux";
import * as annRedux from "../../Announcements/_redux/annRedux";

import { COURSES } from "../../../const/data";

const initCoursesState = {
  coursesList: [],
  currentCourse: {
    id: undefined,
    data: {},
    announcementsList: [],
    activitiesList: [],
    studentsList: [],
  },
};

const actionTypes = {
  set_list: "SET_LIST",
  set_current_course: "SET_CURRENT_COURSE",
};

const setCurrentCourse = (field, data) => (dispatch) => {
  dispatch(
    coursesSlice.actions.setCurrentCourse({
      type: actionTypes.setCurrentCourse,
      field,
      data,
    })
  );
};

/**
 * Get all courses list
 */
const getCoursesList = () => async (dispatch, getState) => {
  const userId = getState().auth.user.ID;
  return requestFromServer
    .getAllCourses(undefined, getState().auth.authToken)
    .then((data) => {
      dispatch(
        coursesSlice.actions.setCoursesList({
          type: actionTypes.set_list,
          list: data
            .filter((value) => value.TeacherID === userId)
            .sort(
              (a, b) => new Date(b.CreationDate) - new Date(a.CreationDate)
            ),
        })
      );
    })
    .catch((err) => {
      console.log(err);
      dispatch(
        coursesSlice.actions.setCoursesList({
          type: actionTypes.set_list,
          list: COURSES,
        })
      );
    });
};

/**
 *
 * @param {*} id
 */
const getCourseData = (id) => async (dispatch, getState) => {
  return requestFromServer
    .getCourse({ ID: id }, getState().auth.authToken)
    .then((data) => {
      dispatch(
        coursesSlice.actions.setCurrentCourse({
          type: actionTypes.set_current_course,
          field: "data",
          data,
        })
      );
    })
    .catch((err) => {
      console.log(err);
      dispatch(
        coursesSlice.actions.setCurrentCourse({
          type: actionTypes.set_current_course,
          field: "data",
          data: COURSES.find((value) => value.ID === id),
        })
      );
    });
};

const getAllStudentsCourse = () => async (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  return requestFromServer
    .GetAllStudentsCourse({ ID: CourseID }, getState().auth.authToken)
    .then((data) => {
      console.log(data);
      dispatch(
        coursesSlice.actions.setCurrentCourse({
          type: actionTypes.set_current_course,
          field: "studentsList",
          data,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const actions = {
  setCurrentCourse,
  getCoursesList,
  getCourseData,
  getAllStudentsCourse,
};

export const getters = {
  getCurrentCourse: () => () => {},
};

export const coursesSlice = createSlice({
  name: "courses",
  initialState: initCoursesState,
  reducers: {
    setCoursesList: (state, action) => {
      const { list } = action.payload;
      state.coursesList = list;
    },
    setCurrentCourse: (state, action) => {
      const { field, data } = action.payload;
      state.currentCourse[field] = data;
    },
  },
});
