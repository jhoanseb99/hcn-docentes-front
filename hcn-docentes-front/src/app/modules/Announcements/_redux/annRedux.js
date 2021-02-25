import { createSlice } from "@reduxjs/toolkit";

import * as requestFromServer from "./annCrud";
import * as authRedux from "../../Auth/_redux/authRedux";

import { ANNOUNCEMENTS } from "../../../const/data";

const initAnnState = {
  announcementslist: [],
  annState: {
    loading: false
  }
};

const actionTypes = {
  set_list: "SET_LIST"
};


const setList = list => dispatch => {
  dispatch(annSlice.actions.setList({ type: actionTypes.set_list, list }));
};

/* API - get all announcement list */
const getAnnouncementsList = () => (dispatch, getState) => {
  let course_id = getState().courses.currentCourse.id;
  console.log(course_id);
  return requestFromServer.getAllAnnouncements({ CourseID: course_id })
  .then(data => {
    dispatch(annSlice.actions.setList({ type: actionTypes.set_list, list: data }));
  })
  .catch(err => {
    console.log(err);
    dispatch(annSlice.actions.setList({ 
      type: actionTypes.set_list, list: ANNOUNCEMENTS.filter(value => value.CourseID === course_id) 
    }));
  });
};

export const actions = {
  setList,
  getAnnouncementsList,
};

export const annSlice = createSlice({
  name: "Adv",
  initialState: initAnnState,
  reducers: {
    setList: (state, action) => {
      const { list } = action.payload;
      state.announcementslist = list;
    },
  }
});