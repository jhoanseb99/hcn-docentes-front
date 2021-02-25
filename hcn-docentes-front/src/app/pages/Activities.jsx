import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import CreateActivitieDialog from "../modules/Activities/components/CreateActivitieDialog.jsx";
import { actions } from "../modules/Activities/_redux/activitiesRedux"; 

export default function Activities() {
  const { activitieslist } = useSelector(state => state.activities);
  const dispatch = useDispatch();

  const [ openCreateDialog, setOpenCreateDialog ] = React.useState(false);
  
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
            <a 
              className="btn btn-primary btn-circle font-weight-bolder"
              onClick={() => setOpenCreateDialog(true)}
            >
              +
            </a> 
          </div>
        </div>
      </div>

      {/* anuncios */}
      {activitieslist.map((value, index) => (
        <div key={index} className="row">
          {/* Card */}
          <div className="card custom-card p-3 mb-5 bg-white rounded">
            {/* Card::body */}
            <div className="card-body pt-3">
              {/* Card::body::title */}
              <div className="card-title">
                <div className="row">
                  <div className="col">
                    <strong className="align-self-center">{ value.Title }</strong> 
                  </div>
                  <div className="col text-right">
                    {/* <a className="btn btn-info font-weight-bolder font-size-sm mr-3">editar</a> */}
                    <a className="btn btn-danger font-weight-bolder font-size-sm mr-3">eliminar</a>
                  </div>
                </div>
              </div>
              {/* Card::body::info */}
              <div className="card-body p-0">
                { value.Description }
              </div>
              <div className="card-body p-0 pt-2">
                <small className="text-muted d-block">
                  <strong>Fecha de publicación:</strong> { moment(value.CreationDate).format("DD-MM-YYYY") }
                </small>
                <small className="text-muted d-block">
                  <strong>Fecha de entrega:</strong> { moment(value.LimitDate).format("DD-MM-YYYY") }
                </small>
              </div>
            </div>
          </div> 
        </div>
      ))}
      <CreateActivitieDialog 
        open={openCreateDialog}
        handleClose={() => setOpenCreateDialog(false)}
      />

    </div>
  );
}