import makeRequest from "../../../const/Crud";
import { getQueryParams } from "../../../const";

import { PATH_COURSES } from "../../Courses/_redux/coursesCrud";

export const PATH_HCN = "/HCN";

export const PATH_GET_ALL_HCN = PATH_HCN + "/GetAllHCN";
export const PATH_GET_HCN_INFO = PATH_HCN + "/GetHCN";

export const PATH_GET_ALL_HCN_BY_COURSE = PATH_COURSES + "/GetAllHCN";
export const PATH_ADD_HCN_TO_COURSE = PATH_COURSES + "/AddHCN";

export const PATH_CREATE_HCN = PATH_HCN + "/CreateHCNMongo";
export const PATH_GET_HCN = PATH_HCN + "/GetHCNMongo";
export const PATH_UPDATE_HCN = PATH_HCN + "/UpdateHCNMongo";

export function getAllHcn(params, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_GET_ALL_HCN + getQueryParams(params),
      method: "GET",
      headers: new Headers({
        Token: authToken,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then((response) => resolve(response))
      .catch((err) => reject(err.message));
  });
}

export function getHcnInfo(params, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_GET_HCN_INFO + getQueryParams(params),
      method: "GET",
      headers: new Headers({
        Token: authToken,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then((response) => resolve(response))
      .catch((err) => reject(err.message));
  });
}

export function getAllHcnByCourse(params, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_GET_ALL_HCN_BY_COURSE + getQueryParams(params),
      method: "GET",
      headers: new Headers({
        Token: authToken,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then((response) => resolve(response))
      .catch((err) => reject(err.message));
  });
}

export function addHcnToCourse(props, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_ADD_HCN_TO_COURSE,
      method: "POST",
      headers: new Headers({
        Token: authToken,
      }),
      body: JSON.stringify({
        HCNID: props.HCNID,
        CourseID: props.CourseID,
        Displayable: 1,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return "It works!";
      })
      .then((response) => resolve(response))
      .catch((err) => reject(err.message));
  });
}

export function createHcn(props, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_CREATE_HCN,
      method: "POST",
      headers: new Headers({
        Token: authToken,
      }),
      body: JSON.stringify(props),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then((response) => resolve(response))
      .catch((err) => reject(err.message));
  });
}

export function updateHcn(props, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_UPDATE_HCN,
      method: "POST",
      headers: new Headers({
        Token: authToken,
      }),
      body: JSON.stringify(props),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then((response) => resolve(response))
      .catch((err) => reject(err.message));
  });
}

export function getHcn(params, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_GET_HCN + getQueryParams(params),
      method: "GET",
      headers: new Headers({
        Token: authToken,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then((response) => resolve(response))
      .catch((err) => reject(err.message));
  });
}
