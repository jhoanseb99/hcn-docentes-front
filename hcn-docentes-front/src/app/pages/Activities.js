import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../modules/Activities/_redux/activitiesRedux"; 

export default function Activities() {
  const { list } = useSelector(state => state.activities);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log(list);
  }, [list]);
  
  React.useEffect(() => {
    dispatch(actions.getActivitiesList());
  }, [dispatch]);

  return(
    <div className="container">

      {/* titulo */}
      <div className="row pb-5">
        <div className="col">
          <h3 className="text-dark">Actividades</h3>  
        </div>
        <div className="col text-right">
          <div className="align-self-center ml-3">
            <a className="btn btn-primary btn-circle font-weight-bolder">+</a> 
          </div>
        </div>
      </div>

      {/* anuncios */}
      {list.map((value, index) => (
        <div key={index} className="row">
          {/* Card */}
          <div className="card custom-card p-3 mb-5 rounded w-100">
            {/* Card::body */}
            <div className="card-body">
              {/* Card::body::title */}
              <div className="card-title">
                <div className="row">
                  <div className="col p-0">
                    <strong className="align-self-center">{value.Title}</strong>
                  </div>
                  <div className="col text-right">
                    <div className="align-self-center ml-3">
                      <a className="btn btn-info font-weight-bolder font-size-sm mr-3">editar</a>
                      <a className="btn btn-danger font-weight-bolder font-size-sm mr-3">eliminar</a>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
              {/* Card::body::info */}
              <div className="row">
                {value.Description}
              </div>
              <div className="row pt-1"> 
                <small className="text-muted font-weight-bold d-block">
                  {value.CreationDate}
                </small>
              </div>
            </div>
          </div> 
        </div>
      ))} 

    </div>
  );
}