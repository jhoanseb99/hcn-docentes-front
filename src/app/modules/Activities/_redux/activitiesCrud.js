import makeRequest from "../../../const/Crud";
import { getQueryParams } from "../../../const";

export const PATH_ACTIVITIES = "/Activities";

export const PATH_GET_ALL_ACTIVITIES = PATH_ACTIVITIES + "/GetAllActivities";
export const PATH_GET_ACTIVITY = PATH_ACTIVITIES + "/GetActivity";
export const PATH_UPDATE_ACTIVITY = PATH_ACTIVITIES + "/UpdateActivity";
export const PATH_CREATE_ACTIVITY = PATH_ACTIVITIES + "/CreateActivity";
export const PATH_DELETE_ACTIVITY = PATH_ACTIVITIES + "/DeleteActivity";

export const PATH_CREATE_SOLVEDHCN = "/SolvedHCN/CreateSolvedHCN";
export const PATH_GET_ALL_SOLVED_HCN = "/SolvedHCN/GetAllSolvedHCN";
export const PATH_DELETE_SOLVED_HCN = "/SolvedHCN/DeleteSolvedHCN";

export function getAllActivities(params, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_GET_ALL_ACTIVITIES + getQueryParams(params),
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

export function getActivity(params, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_GET_ACTIVITY + getQueryParams(params),
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

export function updateActivity(props, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_UPDATE_ACTIVITY,
      method: "PUT",
      headers: new Headers({
        Token: authToken,
      }),
      body: JSON.stringify({
        ID: props.ID,
        Title: props.Title,
        Description: props.Description,
        Type: props.Type,
        CreationDate: props.CreationDate,
        LimitDate: props.LimitDate,
        CourseID: props.CourseID,
        ClinicalCaseID: props.ClinicalCaseID,
        HCNID: props.HCNID,
        Difficulty: props.Difficulty,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        resolve(response);
      })
      .catch((err) => reject(err.message));
  });
}

export function createActivity(props, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_CREATE_ACTIVITY,
      method: "POST",
      headers: new Headers({
        Token: authToken,
      }),
      body: JSON.stringify({
        Title: props.Title,
        Description: props.Description,
        Type: props.Type,
        CreationDate: props.CreationDate,
        LimitDate: props.LimitDate,
        CourseID: props.CourseID,
        ClinicalCaseID: props.ClinicalCaseID,
        HCNID: props.HCNID,
        Difficulty: props.Difficulty,
        TeacherID: props.TeacherID,
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

export function deleteActivity(props, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_DELETE_ACTIVITY,
      method: "DELETE",
      headers: new Headers({
        Token: authToken,
      }),
      body: JSON.stringify({
        ID: props.ID,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        resolve(response);
      })
      .catch((err) => reject(err.message));
  });
}

export function getAllSolvedHcn(params, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_GET_ALL_SOLVED_HCN + getQueryParams(params),
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

export function createSolvedHcn(props, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_CREATE_SOLVEDHCN,
      method: "POST",
      headers: new Headers({
        Token: authToken,
      }),
      body: JSON.stringify({
        CourseID: props.CourseID,
        ActivityID: props.ActivityID,
        OriginalHCN: props.OriginalHCN,
        TeacherID: props.TeacherID,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        resolve(response);
      })
      .catch((err) => reject(err.message));
  });
}

export function deleteSolvedHcn(props, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_DELETE_SOLVED_HCN,
      method: "DELETE",
      headers: new Headers({
        Token: authToken,
      }),
      body: JSON.stringify({
        ActivityID: props.ActivityID,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        resolve(response);
      })
      .catch((err) => reject(err.message));
  });
}
