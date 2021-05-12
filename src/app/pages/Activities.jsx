import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import CreateActivityDialog from "../modules/Activities/components/CreateActivityDialog.jsx";
import UpdateActivityDialog from "../modules/Activities/components/UpdateActivityDialog.jsx";
import { actions } from "../modules/Activities/_redux/activitiesRedux";
import BaseCardSection from "app/components/UI/BaseCardSection.jsx";
import BaseDialog from "app/components/UI/BaseDialog";

export default function Activities() {
  const { activitieslist } = useSelector((state) => state.activities);
  const dispatch = useDispatch();
  const history = useHistory();

  const [openCreateDialog, setOpenCreateDialog] = React.useState(false);
  const [openUpdateDialog, setOpenUpdateDialog] = React.useState(false);
  const [confirmDelete, setConfirmDelete] = React.useState(false);
  const [activityValue, setActivityValue] = React.useState(undefined);

  React.useEffect(() => {
    dispatch(actions.getActivitiesList());
  }, [dispatch]);

  const dispatchDelete = ({ ID }) => {
    dispatch(actions.deleteActivity(ID)).then(() => setConfirmDelete(false));
  };

  const handleDelete = (values) => {
    setActivityValue(values);
    setConfirmDelete(true);
  };

  const handleUpdate = (data) => {
    setActivityValue(data);
    setOpenUpdateDialog(true);
  };

  const handleGrade = ({ ID }) => {
    history.push(`activities/${ID}`);
  };

  return (
    <BaseCardSection
      title="Actividades"
      toolbar={[
        {
          className: "btn btn-primary btn-circle font-weight-bolder",
          onClick: () => setOpenCreateDialog(true),
          title: "Crear actividad",
        },
      ]}
      style={{ backgroundColor: "#f3f6f9" }}
    >
      <div className="container-fluid">
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
                      <strong className="align-self-center">
                        {value.Title}
                      </strong>
                    </div>
                    <div className="col text-right">
                      {value.Type === "Calificable" && (
                        <a
                          className="btn btn-primary font-weight-bolder font-size-sm mr-3"
                          title="calificar"
                          onClick={() => handleGrade(value)}
                        >
                          <AssignmentTurnedInIcon />
                        </a>
                      )}
                      <a
                        className="btn btn-info font-weight-bolder font-size-sm mr-3"
                        onClick={() => handleUpdate(value)}
                        title="editar"
                      >
                        <EditIcon />
                      </a>
                      <a
                        className="btn btn-danger font-weight-bolder font-size-sm mr-3"
                        onClick={() => handleDelete(value)}
                        title="eliminar"
                      >
                        <DeleteIcon />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Card::body::info */}
                <div className="card-body p-0">{value.Description}</div>
                <div className="card-body p-0 pt-2">
                  <small className="text-muted d-block">
                    <strong>Fecha de publicación:</strong>{" "}
                    {moment(value.CreationDate).format("DD-MM-YYYY")}
                  </small>
                  <small className="text-muted d-block">
                    <strong>Fecha de entrega:</strong>{" "}
                    {moment(value.LimitDate).format("DD-MM-YYYY")}
                  </small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {openCreateDialog && (
        <CreateActivityDialog
          open={openCreateDialog}
          handleClose={() => setOpenCreateDialog(false)}
        />
      )}

      {openUpdateDialog && (
        <UpdateActivityDialog
          open={openUpdateDialog}
          handleClose={() => setOpenUpdateDialog(false)}
          activity={activityValue}
        />
      )}

      {confirmDelete && (
        <BaseDialog
          open={confirmDelete}
          onClose={() => setConfirmDelete(false)}
          actions={[
            {
              content: "Confirmar",
              onClick: () => dispatchDelete(activityValue),
              color: "primary",
            },
            {
              content: "Cancelar",
              onClick: () => setConfirmDelete(false),
              className: "btn btn-secondary",
            },
          ]}
        >
          ¿Desea eliminar actividad?
        </BaseDialog>
      )}
    </BaseCardSection>
  );
}
