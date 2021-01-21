import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {actions} from "../modules/Advertisements/redux/advRedux";

export default function Advertisements() {
  const { table } = useSelector(state => state.adv);
  const dispatch = useDispatch();

  const new_table = [1,2,3,4];

  React.useEffect(() => {
    console.log(table);
  }, [table]);

  const enviar = () => {
    dispatch(actions.setTable(new_table));
  };

  return (
    <div className="container">
      {/* titulo */}
      <div className="row pt-5 pb-3">
        <h3 className="text-dark">Anuncios</h3>
        <div className="align-self-center ml-3">
          <a className="btn btn-success font-weight-bolder font-size-sm mr-3" onClick={enviar}>+</a>
        </div>
      </div>
      {/* anuncios */}
      <div className="row">
        
        {/* Card */}
        <div className="card shadow-sm p-3 mb-5 bg-white rounded">
          {/* Card::body */}
          <div className="card-body pt-3">
            {/* Card::body::title */}
            <div className="card-title">
              <div className="row">
                <strong className="align-self-center">Anuncio #1</strong>
                <div className="align-self-center ml-3">
                  <a className="btn btn-info font-weight-bolder font-size-sm mr-3">editar</a>
                  <a className="btn btn-danger font-weight-bolder font-size-sm mr-3">eliminar</a>
                </div>
              </div>
            </div>
            {/* Card::body::info */}
            <div className="row">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="row pt-1">
              <small className="text-muted font-weight-bold d-block">
                19-10-2020
              </small>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="card shadow-sm p-3 mb-5 bg-white rounded">
          {/* Card::body */}
          <div className="card-body pt-3">
            {/* Card::body::title */}
            <div className="card-title">
              <div className="row">
                <strong className="align-self-center">Anuncio #1</strong>
                <div className="align-self-center ml-3">
                  <a className="btn btn-info font-weight-bolder font-size-sm mr-3">editar</a>
                  <a className="btn btn-danger font-weight-bolder font-size-sm mr-3">eliminar</a>
                </div>
              </div>
            </div>
            {/* Card::body::info */}
            <div className="row">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="row pt-1">
              <small className="text-muted font-weight-bold d-block">
                19-10-2020
              </small>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="card shadow-sm p-3 mb-5 bg-white rounded">
          {/* Card::body */}
          <div className="card-body pt-3">
            {/* Card::body::title */}
            <div className="card-title">
              <div className="row">
                <strong className="align-self-center">Anuncio #1</strong>
                <div className="align-self-center ml-3">
                  <a className="btn btn-info font-weight-bolder font-size-sm mr-3">editar</a>
                  <a className="btn btn-danger font-weight-bolder font-size-sm mr-3">eliminar</a>
                </div>
              </div>
            </div>
            {/* Card::body::info */}
            <div className="row">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="row pt-1">
              <small className="text-muted font-weight-bold d-block">
                19-10-2020
              </small>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}