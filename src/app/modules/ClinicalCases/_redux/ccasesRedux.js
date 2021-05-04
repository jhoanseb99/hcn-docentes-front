import { createSlice } from "@reduxjs/toolkit";
import { notificationActions } from "app/components/_redux/notificationRedux";
import * as requestFromServer from "./ccasesCrud";
import { CCASES } from "../../../const/data";

const initCCasesState = {
  ccasesList: [],
  ccasesListByCourse: [],
};

const actionTypes = {
  set_list: "SET_LIST",
  set_list_by_course: "SET_LIST_BY_COURSE",
};

const getCCasesList = () => async (dispatch, getState) => {
  const userId = getState().auth.user.ID;
  return requestFromServer
    .getAllCCases(undefined, getState().auth.authToken)
    .then((data) => {
      dispatch(
        ccasesSlice.actions.setList({
          type: actionTypes.set_list,
          list: data.filter((value) => value.TeacherID === userId),
        })
      );
    })
    .catch((err) => {
      console.log(err);
      dispatch(notificationActions.setNotification(err.message, "error"));
      dispatch(
        ccasesSlice.actions.setList({
          type: actionTypes.set_list,
          list: CCASES,
        })
      );
    });
};

const getCCasesListByCourse = () => async (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  const authToken = getState().auth.authToken;
  return requestFromServer
    .getAllCCasesByCourse({ CourseID }, authToken)
    .then(async (data) => {
      dispatch(
        ccasesSlice.actions.setListByCourse({
          type: actionTypes.set_list,
          list: [],
        })
      );
      await Promise.all(
        data.map(async (value) => {
          let ccase = await requestFromServer.getCCase(
            {
              ID: value.ClinicalCaseID,
            },
            authToken
          );
          dispatch(
            ccasesSlice.actions.addListByCourse({
              type: actionTypes.set_list,
              value: ccase,
            })
          );
        })
      );
    })
    .catch((err) => {
      console.log(err);
      dispatch(notificationActions.setNotification(err.message, "error"));
      dispatch(
        ccasesSlice.actions.sortListByCourse({
          type: actionTypes.set_list,
          sort_by: (a, b) =>
            new Date(b.CreationDate) - new Date(a.CreationDate),
        })
      );
    });
};

const addCCaseToCourse = (id) => async (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  return requestFromServer
    .addCCaseToCourse(
      { ClinicalCaseID: id, CourseID },
      getState().auth.authToken
    )
    .then(() => {
      dispatch(
        notificationActions.setNotification("Caso Clínico añadido exitosamente")
      );
      dispatch(getCCasesListByCourse());
    })
    .catch((err) => {
      console.log(err);
      dispatch(notificationActions.setNotification(err.message, "error"));
    });
};

const createCCase = (props) => async (dispatch, getState) => {
  const userId = getState().auth.user.ID;
  return requestFromServer
    .createCCase({ ...props, TeacherID: userId }, getState().auth.authToken)
    .then(() => {
      dispatch(
        notificationActions.setNotification("Caso Clínico creado exitosamente")
      );
      dispatch(getCCasesList());
    })
    .catch((err) => {
      console.log(err);
      dispatch(notificationActions.setNotification(err.message, "error"));
    });
};

const updateCCase = (props) => async (dispatch, getState) => {
  const userId = getState().auth.user.ID;
  return requestFromServer
    .updateCCase({ ...props, TeacherID: userId }, getState().auth.authToken)
    .then(() => {
      dispatch(
        notificationActions.setNotification(
          "Caso Clínico actualizado exitosamente"
        )
      );
      dispatch(getCCasesList());
      dispatch(getCCasesListByCourse());
    })
    .catch((err) => {
      console.log(err);
      dispatch(notificationActions.setNotification(err.message, "error"));
    });
};

const deleteCCaseByCourse = (id) => (dispatch, getState) => {
  return dispatch(removeCCase(id))
    .then(() =>
      requestFromServer.deleteCCase({ ID: id }, getState().auth.authToken)
    )
    .then(() => {
      dispatch(
        notificationActions.setNotification(
          "Caso Clínico eliminado exitosamente"
        )
      );
      dispatch(getCCasesList());
      dispatch(getCCasesListByCourse());
    })
    .catch((err) => {
      console.log(err);
      dispatch(notificationActions.setNotification(err.message, "error"));
    });
};

const removeCCase = (id) => async (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  return requestFromServer
    .removeCCaseToCourse(
      { ClinicalCaseID: id, CourseID },
      getState().auth.authToken
    )
    .then(() => {
      dispatch(
        notificationActions.setNotification(
          "Caso Clínico removido exitosamente"
        )
      );
      dispatch(getCCasesListByCourse());
    })
    .catch((err) => {
      console.log(err);
      dispatch(notificationActions.setNotification(err.message, "error"));
    });
};

export const actions = {
  getCCasesListByCourse,
  getCCasesList,
  addCCaseToCourse,
  createCCase,
  updateCCase,
  removeCCase,
  deleteCCaseByCourse,
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
    sortListByCourse: (state, action) => {
      const { sort_by } = action.payload;
      state.ccasesListByCourse.sort(sort_by);
    },
  },
});
