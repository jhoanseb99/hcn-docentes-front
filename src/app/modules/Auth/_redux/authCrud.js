import makeRequest from "../../../const/Crud";

export const PATH_LOGIN = "/Authentication/Login";

export async function login(username, password) {
  switch (username) {
    case "juancmartinez":
      return new Promise((resolve, reject) => {
        if(password === "123")
          resolve({
            token: "ashjkqwertyui",
            user: { username: "juancmartinez", Name: "Juan Carlos Martinez" }
          });
        else reject(null);
      });
    case "jhoanlozano":
      return new Promise((resolve, reject) => {
        if(password === "123")
          resolve({
            token: "ashjkqwertyui",
            user: { username: "jhoanlozano", Name: "Jhoan Lozano" }
          });
        else reject(null);
      });
    case "xaviergarzon":
      return new Promise((resolve, reject) => {
        if(password === "123")
          resolve({
            token: "ashjkqwertyui",
            user: { username: "xaviergarzon", Name: "Xavier Garzón" }
          });
        else reject(null);
      });  
  
    default:
      return new Promise((resolve, reject) => {console.log("aqui"); reject("Rechazado")});
  }
}