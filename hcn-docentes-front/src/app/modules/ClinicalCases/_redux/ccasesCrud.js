import makeRequest from "../../../const/Crud";
import { getQueryParams } from "../../../const";

import { PATH_COURSES } from "../../Courses/_redux/coursesCrud";

export const PATH_CCASES = "/ClinicalCases";

export const PATH_GET_ALL_CCASES = PATH_CCASES + "/GetAllClinicalCases";

export const PATH_GET_ALL_CCASES_BY_COURSE = PATH_COURSES + "/GetAllClinicalCases";

export function getAllCCasesByCourse(authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_GET_ALL_CCASES, 
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