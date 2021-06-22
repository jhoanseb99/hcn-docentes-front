import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProgressBar from "react-bootstrap/ProgressBar";
import { CircularProgress } from "@material-ui/core";
import { actions as hcnRedux } from "../_redux/hcnRedux";
import BaseSection from "app/components/UI/BaseSection";
import HcnForm from "../components/HcnForm";

function UpdateHcnPage(props) {
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const { progress } = useSelector((state) => state.hcn);
  const [hcn_data, setHcnData] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const updateHCN = (values) => {
    dispatch(hcnRedux.updateHcn({ ...values, _id: hcn_data._id }));
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
              now={progress}
              label={`Progreso de la hcn %`}
            />
          )}
        >
          {!loading ? (
            <HcnForm handleSubmit={updateHCN} data={hcn_data} />
          ) : (
            <CircularProgress size={10} color="inherit" />
          )}
        </BaseSection>
      </div>
    </div>
  );
}

export default UpdateHcnPage;
