import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toAbsoluteUrl } from "theme/helpers";
import { CircularProgress } from "@material-ui/core";
import { login } from "../_redux/authCrud";
import { actions as authActions } from "../_redux/authRedux";
import { Alert } from "@material-ui/lab";

const initialValues = {
  username: "",
  password: "",
};

function Login() {
  const dispatch = useDispatch();

  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Mínimo 3 carácteres")
      .max(50, "Máximo 50 carácteres")
      .required("Campo requerido"),
    password: Yup.string()
      .min(3, "Mínimo 3 carácteres")
      .max(50, "Máximo 50 carácteres")
      .required("Campo requerido"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setTimeout(() => {
        login(values.username, values.password)
          .then((response) => {
            setSubmitting(false);
            const { Token: token, ...user } = response;
            dispatch(authActions.login(token));
            dispatch(authActions.fulfillUser(user));
          })
          .catch(() => {
            setSubmitting(false);
            setStatus("Usuario o contraseña incorrectos");
          });
      }, 1000);
    },
  });

  return (
    <div className="align-self-center">
      <div className="card col-12" style={{ borderTop: "5px solid #1B7B52" }}>
        <img
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          alt="HCN logo"
          src={toAbsoluteUrl("/media/logos/menta4.png")}
          width="100"
          height="100"
        />
        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            {formik.status && (
              <Alert variant="standard" severity="error">
                {formik.status}
              </Alert>
            )}
            <label htmlFor="username">Nombre de usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              className={`form-control ${
                formik.touched.username
                  ? formik.errors.username
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
              placeholder="Nombre de usuario"
              {...formik.getFieldProps("username")}
            />
            <div className="invalid-feedback">{formik.errors.username}</div>

            <label htmlFor="username" className="mt-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`form-control ${
                formik.touched.password
                  ? formik.errors.password
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
              placeholder="Contraseña"
              {...formik.getFieldProps("password")}
            />
            <div className="invalid-feedback">{formik.errors.password}</div>

            <button
              type="submit"
              className="btn btn-secondary font-weight-bold my-3"
              disabled={formik.isSubmitting}
              style={{ backgroundColor: "#343a40" }}
            >
              <span>Iniciar sesión</span>
              {formik.isSubmitting && (
                <CircularProgress className="ml-2" size={10} color="inherit" />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
