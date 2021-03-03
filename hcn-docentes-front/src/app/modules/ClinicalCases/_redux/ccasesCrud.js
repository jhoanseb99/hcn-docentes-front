import makeRequest from "../../../const/Crud";
import { getQueryParams } from "../../../const";

import { PATH_COURSES } from "../../Courses/_redux/coursesCrud";

export const PATH_CCASES = "/ClinicalCases";

export const PATH_GET_ALL_CCASES = PATH_CCASES + "/GetAllClinicalCases";
export const PATH_GET_CCASE = PATH_CCASES + "/GetClinicalCase";

export const PATH_GET_ALL_CCASES_BY_COURSE = PATH_COURSES + "/GetAllClinicalCases";
export const PATH_ADD_CCASE_TO_COURSE = PATH_COURSES + "/AddClinicalCase";

export function getAllCCases(params, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_GET_ALL_CCASES + getQueryParams(params), 
      method: "GET",
      headers: new Headers(),
    })
    .then(response => {
      if(!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then(response => resolve(response))
    .catch(err => reject(err.message)); 
  });
}

export function getCCase(params, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_GET_CCASE + getQueryParams(params), 
      method: "GET",
      headers: new Headers(),
    })
    .then(response => {
      if(!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then(response => resolve(response))
    .catch(err => reject(err.message)); 
  });
}

export function getAllCCasesByCourse(params, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_GET_ALL_CCASES_BY_COURSE + getQueryParams(params), 
      method: "GET",
      headers: new Headers(),
    })
    .then(response => {
      if(!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then(response => resolve(response))
    .catch(err => reject(err.message)); 
  });
}

export function addCCaseToCourse(props, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_ADD_CCASE_TO_COURSE, 
      method: "GET",
      headers: new Headers(),
      body: JSON.stringify({
        CourseID: props.CourseID,
        ClinicalCaseID: props.ClinicalCaseID,
        Displayable: 1,
      })
    })
    .then(response => {
      if(!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then(response => resolve(response))
    .catch(err => reject(err.message)); 
  });
}