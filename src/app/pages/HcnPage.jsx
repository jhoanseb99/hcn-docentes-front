import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { actions as hcnRedux } from "../modules/HCN/_redux/hcnRedux";
import BaseSection from "../components/UI/BaseSection";
import AddHcnDialog from "../modules/HCN/components/AddHcnDialog.jsx"
import CardGridContainer from "../components/UI/CardGridContainer";

function HcnPage() {
  const { hcnListByCourse } = useSelector(state => state.hcn);
  const dispatch = useDispatch();
  const history = useHistory();

  const [ openAddDialog, setOpenAddDialog ] = React.useState(false);

  React.useEffect(() => {
    dispatch(hcnRedux.getHcnListByCourse());
  }, []);

  return (
    <BaseSection 
      title="Historias Clínicas Nutricionales"
      toolbar={[
        {
          title: "Agregar",
          className: "btn btn-primary btn-circle font-weight-bolder",
          onClick: () => setOpenAddDialog(true)
        },
        {
          className: "btn btn-primary btn-circle font-weight-bolder ml-2",
          onClick: () => history.push("/hcn/create"),
          title: "+"
        }
      ]}
    >
      <CardGridContainer data={hcnListByCourse}>
        { hcn => (
          <NavLink to="#" >
            <div className="card custom-card" style={{height: "150px"}}>
              <div className="d-flex card-body justify-content-center align-items-center">
                <div className="d-flex flex-column align-items-center">
                  <span className="mt-1">{ hcn.HCNID }</span>
                </div>
              </div>
            </div>
          </NavLink>
        )}
      </CardGridContainer>

      {
        openAddDialog &&
        <AddHcnDialog 
          open={openAddDialog}
          handleClose={() => setOpenAddDialog(false)}
        />
      }

    </BaseSection>
  );
}

export default HcnPage;