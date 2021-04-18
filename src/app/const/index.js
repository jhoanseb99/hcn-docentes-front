export const URL = "http://104.44.129.29:3600";

export function getQueryParams(filters) {
  let ans = "";
  let first = true;
  for (const filter in filters) {
    if (filters[filter] !== "") {
      var str;
      if (first) [str, first] = ["?", false];
      else str = "&";
      
      switch (filter) {
        default:
          ans += str + `${filter}=${filters[filter]}`; 
          break;
      }
    }
  }
  return ans;
}

export function base64ToBlob(base64) {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; ++i) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return new Blob([bytes], { type: 'application/pdf' });
};


export const activityTypes = {
  qualifying: "Calificable"
};

export const initialHcnValues = {
  ConsultationReason: "",
  Interpretation: "",
  Feedback: "",

  // General data
  GeneralData_ValorationDate: "",
  GeneralData_HCNNumber: "",
  GeneralData_AdmissionDate: "",
  GeneralData_Room: "",
  GeneralData_Interpretation: "",
  GeneralData_Feedback: "",

  // Patient Data
  PatientData_FullName: "",
  PatientData_Birthdate: "",
  PatientData_Gender: "",
  PatientData_Sex: "",
  PatientData_EPS: "",
  PatientData_Telephone: "",
  PatientData_Occupation: "",
  PatientData_CivilStatus: "",
  PatientData_Interpretation: "",
  PatientData_Feedback: "",

  // Anthropometry
  Anthropometry_Interpretation: "",
  Anthropometry_Feedback: "",

  Anthropometry_Weight_Actual: "",
  Anthropometry_Weight_Usual: "",
  Anthropometry_Weight_Reference: "",
  Anthropometry_Weight_ChangeWeight: "",
  Anthropometry_Weight_Interpretation: "",
  Anthropometry_Weight_Feedback: "",

  Anthropometry_TricipitalFold_Value: "",
  Anthropometry_TricipitalFold_Interpretation: "",
  Anthropometry_TricipitalFold_Feedback: "",

  Anthropometry_BrachialPerimeter_Value: "",
  Anthropometry_BrachialPerimeter_Interpretation: "",
  Anthropometry_BrachialPerimeter_Feedback: "",

  Anthropometry_AbdominalPerimeter_Value: "",
  Anthropometry_AbdominalPerimeter_Interpretation: "",
  Anthropometry_AbdominalPerimeter_Feedback: "",

  Anthropometry_SubscapularFold_Value: "",
  Anthropometry_SubscapularFold_Interpretation: "",
  Anthropometry_SubscapularFold_Feedback: "",

  Anthropometry_Height_Value: "",
  Anthropometry_Height_Interpretation: "",
  Anthropometry_Height_Feedback: "",

  Anthropometry_Structure_Value: "",
  Anthropometry_Structure_Interpretation: "",
  Anthropometry_Structure_Feedback: "",

  Anthropometry_BMI_Value: "",
  Anthropometry_BMI_Interpretation: "",
  Anthropometry_BMI_Feedback: "",

  // Biochemistry
  Biochemistry_Interpretation: "",
  Biochemistry_Feedback: "",
};