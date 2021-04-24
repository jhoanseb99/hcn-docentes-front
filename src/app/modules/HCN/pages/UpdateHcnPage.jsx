import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import { CircularProgress } from "@material-ui/core";
import { actions as hcnRedux } from "../_redux/hcnRedux";
import BaseSection from "app/components/UI/BaseSection";
import HcnForm from "../components/HcnForm";

function UpdateHcnPage(props) {
  const { id } = props.match.params;
  const [hcn_data, setHcnData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const updateHCN = (hcn_data) => {
    dispatch(hcnRedux.updateHcn(hcn_data)).then(() =>
      history.push("/courses/hcn")
    );
  };

  React.useEffect(async () => {
    setLoading(true);
    dispatch(hcnRedux.getHcn({ id })).then((data) => {
      setHcnData(data);
      setLoading(false);
    });
  }, [id]);

  return (
    <div className="card">
      <div className="card-body">
        <BaseSection
          title="Editar Historia Clínica Nutricional"
          component={() => (
            <ProgressBar
              className="mb-3"
              now={60}
              label={`Progreso de la hcn %`}
            />
          )}
        >
          {!loading ? (
            <HcnForm
              handleSubmit={updateHCN}
              handleReturn={() => history.push("/courses/hcn")}
              data={hcn_data}
            />
          ) : (
            <CircularProgress size={10} color="inherit" />
          )}
        </BaseSection>
      </div>
    </div>
  );
}

export default UpdateHcnPage;
