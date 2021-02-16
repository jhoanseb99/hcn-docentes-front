import { URL } from "../../../const";

function makeRequest({ path, method, headers, ...others }) {
  let config = {
    method,
    headers: headers ? headers : new Headers(),
    ...others
  };
  let myRequest = new Request(URL + path, config);
  return fetch(myRequest);
}

export default makeRequest;