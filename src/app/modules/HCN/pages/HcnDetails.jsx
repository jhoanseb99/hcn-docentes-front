import React from "react";
import BaseCardSection from "../../../components/UI/BaseCardSection";

function HcnDetails() {
  const [ hcn, setHcn ] = React.useState({
    GeneralData: {},
    PatientData: {},
    ConsultationReason: {},
    Anthropometry: {},
    Biochemistry: {},
    Interpretation: {}
  });

  return (
    <BaseCardSection title="Historia Clínica Nutricional">
      <form>
        <div className="form-group">
          <label htmlFor="Title">Fecha de valoración</label>
          <input 
            type="text"
            name="Title"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Title">Interpretation</label>
          <input 
            type="text"
            name="Title"
            className="form-control"
          />
        </div>
      </form>
    </BaseCardSection>
  );
}

export default HcnDetails; 