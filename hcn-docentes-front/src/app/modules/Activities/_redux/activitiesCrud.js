import makeRequest from "../../../const/Crud";
import { getQueryParams } from "../../../const";

export const PATH_ACTIVITIES = "/Activities";

export const PATH_GET_ALL_ACTIVITIES = PATH_ACTIVITIES + "/GetAllActivities";
export const PATH_GET_ACTIVITIE = PATH_ACTIVITIES + "/GetActivity";
export const PATH_UPDATE_ACTIVITIE = PATH_ACTIVITIES + "/UpdateActivity";
export const PATH_CREATE_ACTIVITIE = PATH_ACTIVITIES + "/CreateActivity";
export const PATH_DELETE_ACTIVITIE = PATH_ACTIVITIES + "/DeleteActivity";

export function getAllActivities(authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_GET_ALL_ACTIVITIES, 
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

export function getActivity(params, authToken) {
  return makeRequest({
    path: PATH_GET_ACTIVITIE + getQueryParams(params), 
    method: "GET",
    headers: new Headers(),
  });
}

export function updateActivity(props, authToken) {
  return makeRequest({
    path: PATH_UPDATE_ACTIVITIE, 
    method: "POST",
    headers: new Headers(),
    body: JSON.stringify({
      ID              : props.id,
      Title           : props.title,
      Description     : props.description,
      Type            : props.type,
      CreationDate    : props.creation_date,
      LimitDate       : props.limit_date,
      CourseID        : props.course_id,
      ClinicalCaseID  : props.cc_id,
      HCNID           : props.hcn_id,
      Difficulty      : props.difficulty,
    }),
  });
}

export function createActivity(props, authToken) {
  return makeRequest({
    path: PATH_CREATE_ACTIVITIE, 
    method: "POST",
    headers: new Headers(),
    body: JSON.stringify({
      ID              : props.id,
      Title           : props.title,
      Description     : props.description,
      Type            : props.type,
      CreationDate    : props.creation_date,
      LimitDate       : props.limit_date,
      CourseID        : props.course_id,
      ClinicalCaseID  : props.cc_id,
      HCNID           : props.hcn_id,
      Difficulty      : props.difficulty,
    }),
  });
}

export function deleteActivity(authToken) {
  return makeRequest({
    path: PATH_DELETE_ACTIVITIE, 
    method: "DELETE",
    headers: new Headers(),
  });
}