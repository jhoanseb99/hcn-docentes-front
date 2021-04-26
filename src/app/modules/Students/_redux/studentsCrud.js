import makeRequest from "app/const/Crud";
import { getQueryParams } from "../../../const";

export const PATH_STUDENTS = "/Students";

export const PATH_GET_ALL_STUDENTS = PATH_STUDENTS + "/GetAllStudents";
export const PATH_GET_STUDENT = PATH_STUDENTS + "/GetStudent";
export const PATH_UPDATE_STUDENT = PATH_STUDENTS + "/UpdateStudent";
export const PATH_CREATE_STUDENT = PATH_STUDENTS + "/CreateStudent";
export const PATH_DELETE_STUDENT = PATH_STUDENTS + "/DeleteStudent";

export function getAllStudents(params, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_GET_ALL_STUDENTS + getQueryParams(params),
      method: "GET",
      headers: new Headers(),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then((response) => resolve(response))
      .catch((err) => reject(err.message));
  });
}

export function getStudent(params, authToken) {
  return makeRequest({
    path: PATH_GET_STUDENT + getQueryParams(params),
    method: "GET",
    headers: new Headers(),
  });
}

export function updateStudent(props, authToken) {
  return makeRequest({
    path: PATH_UPDATE_STUDENT,
    method: "POST",
    headers: new Headers(),
    body: JSON.stringify({
      ID: props.id,
      Name: props.name,
      Email: props.email,
    }),
  });
}

export function createStudent(props, authToken) {
  return makeRequest({
    path: PATH_CREATE_STUDENT,
    method: "POST",
    headers: new Headers(),
    body: JSON.stringify({
      ID: props.id,
      Name: props.name,
      Email: props.email,
    }),
  });
}

export function deleteStudent(authToken) {
  return makeRequest({
    path: PATH_DELETE_STUDENT,
    method: "DELETE",
    headers: new Headers(),
  });
}
