import React from "react";
import { getCCase } from "../_redux/ccasesCrud";

function ClinicalCasesDetails(props) {
  const { id } = props.match.params;
  const [ ccase, setCCase ] = React.useState({});

  React.useEffect(() => {
    getCCase({ id })
      .then(data => setCCase(data));
  }, [id]);

  return (
    <div className="container">
      <div className="card custom-card">
        <div className="card-header">
          <div className="card-title">
            <h3>Caso Clínico</h3>
          </div>
        </div>
        <div className="card-body">
          
        </div>
      </div>
    </div>
  );
}

export default ClinicalCasesDetails;