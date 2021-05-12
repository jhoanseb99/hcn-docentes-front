import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { actions as hcnRedux } from "../modules/HCN/_redux/hcnRedux";
import BaseSection from "../components/UI/BaseSection";
import AddHcnDialog from "../modules/HCN/components/AddHcnDialog.jsx";
import CardGridContainer from "../components/UI/CardGridContainer";
import BaseDialog from "app/components/UI/BaseDialog";

function HcnPage() {
  const { hcnListByCourse, hcnObject } = useSelector((state) => state.hcn);
  const dispatch = useDispatch();
  const history = useHistory();

  const [openAddDialog, setOpenAddDialog] = React.useState(false);
  const [confirmDelete, setConfirmDelete] = React.useState({
    value: false,
    func: () => {},
  });
  const [hcnValue, setHcnValue] = React.useState(undefined);

  React.useEffect(() => {
    dispatch(hcnRedux.getHcnListByCourse());
  }, [dispatch]);

  const closeDeleteModal = () =>
    setConfirmDelete((prevState) => ({ ...prevState, value: false }));

  const dispatchDelete = ({ HCNID }) => {
    dispatch(hcnRedux.deleteHcn(HCNID)).then(() => closeDeleteModal());
  };

  const dispatchRemove = ({ HCNID }) => {
    dispatch(hcnRedux.removeHcn(HCNID)).then(() => closeDeleteModal());
  };

  const handleDelete = (values, func) => {
    setHcnValue(values);
    setConfirmDelete({ value: true, func });
  };

  return (
    <BaseSection
      title="Historias Clínicas Nutricionales"
      toolbar={[
        {
          title: "Agregar",
          className: "btn btn-primary btn-circle font-weight-bolder",
          onClick: () => setOpenAddDialog(true),
        },
        {
          className: "btn btn-primary btn-circle font-weight-bolder ml-2",
          onClick: () => history.push("/hcn/create"),
          title: "Crear HCN",
        },
      ]}
    >
      <CardGridContainer data={hcnListByCourse}>
        {(hcn) =>
          hcnObject[hcn.HCNID] && (
            <div className="card custom-card" style={{ height: "150px" }}>
              <div className="card-header text-right">
                <a
                  className="btn btn-danger font-weight-bolder font-size-sm mr-3"
                  onClick={() => handleDelete(hcn, dispatchRemove)}
                  title="remover de este curso"
                >
                  <RemoveCircleIcon />
                </a>

                <a
                  className="btn btn-danger font-weight-bolder font-size-sm"
                  onClick={() => handleDelete(hcn, dispatchDelete)}
                  title="Eliminar de forma permanente"
                >
                  <DeleteIcon />
                </a>
              </div>
              <div className="card-body">
                <NavLink to={`/hcn/update/${hcnObject[hcn.HCNID].MongoID}`}>
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="d-flex flex-column align-items-center">
                      <span className="mt-1">{hcn.HCNID}</span>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          )
        }
      </CardGridContainer>

      {openAddDialog && (
        <AddHcnDialog
          open={openAddDialog}
          handleClose={() => setOpenAddDialog(false)}
        />
      )}

      {confirmDelete.value && (
        <BaseDialog
          open={confirmDelete.value}
          onClose={() =>
            setConfirmDelete((prevState) => ({ ...prevState, value: false }))
          }
          actions={[
            {
              content: "Confirmar",
              onClick: () => confirmDelete.func(hcnValue),
              color: "primary",
            },
            {
              content: "Cancelar",
              onClick: () =>
                setConfirmDelete((prevState) => ({
                  ...prevState,
                  value: false,
                })),
              className: "btn btn-secondary",
            },
          ]}
        >
          ¿Desea realizar dicha acción?
        </BaseDialog>
      )}
    </BaseSection>
  );
}

export default HcnPage;
