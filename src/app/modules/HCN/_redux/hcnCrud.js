import makeRequest from "../../../const/Crud";
import { getQueryParams } from "../../../const";

import { PATH_COURSES } from "../../Courses/_redux/coursesCrud";

export const PATH_HCN = "/HCN";

export const PATH_GET_ALL_HCN = PATH_HCN + "/GetAllHCN";
export const PATH_GET_HCN_INFO = PATH_HCN + "/GetHCN";

export const PATH_GET_ALL_HCN_BY_COURSE = PATH_COURSES + "/GetAllHCN";
export const PATH_ADD_HCN_TO_COURSE = PATH_COURSES + "/AddHCN";
export const PATH_REMOVE_HCN = PATH_COURSES + "/RemoveHCN";
export const PATH_DELETE_HCN = PATH_HCN + "/DeleteHCN";
export const PATH_VISIBILITY_HCN = PATH_COURSES + "/VisibilityHCN";

export const PATH_CREATE_HCN = PATH_HCN + "/CreateHCNMongo";
export const PATH_GET_HCN = PATH_HCN + "/GetHCNMongo";
export const PATH_UPDATE_HCN = PATH_HCN + "/UpdateHCNMongo";
export const PATH_UPDATE_SOLVED_HCN = "/SolvedHCN/UpdateSolvedHCN";

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
      .then(async (response) => {
        if (!response.ok) throw new Error(response.status);
        try {
          const data = await response.json();
          return data;
        } catch {
          return [];
        }
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
  console.log(props);
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_UPDATE_HCN,
      method: "PUT",
      headers: new Headers({
        Token: authToken,
      }),
      body: JSON.stringify(props),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        resolve(response);
      })
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

export function updateSolvedHcn(props, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_UPDATE_SOLVED_HCN,
      method: "PUT",
      headers: new Headers({
        Token: authToken,
      }),
      body: JSON.stringify(props),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        resolve(response);
      })
      .catch((err) => reject(err.message));
  });
}

export function deleteHcn(props, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_DELETE_HCN,
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

export function removeHcn(props, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_REMOVE_HCN,
      method: "DELETE",
      headers: new Headers({
        Token: authToken,
      }),
      body: JSON.stringify(props),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        resolve(response);
      })
      .catch((err) => reject(err.message));
  });
}

export function visibilityHcn(props, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_VISIBILITY_HCN,
      method: "POST",
      headers: new Headers({
        Token: authToken,
      }),
      body: JSON.stringify({
        CourseID: props.CourseID,
        HCNID: props.HCNID,
        Displayable: props.Displayable,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        resolve(response);
      })
      .catch((err) => reject(err.message));
  });
}
