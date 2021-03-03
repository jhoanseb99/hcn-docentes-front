import React from "react";
import BaseModal from "../../../components/UI/BaseModal.jsx";

function CreateCCaseDialog({ open, handleClose }) {
  
  const handleCreate = () => {

  };

  const actionButtons = [
    {
      content: "Publicar anuncio",
      onClick: () => handleCreate()
    },
    {
      content: "Cancelar",
      onClick: () => handleClose(),
      className: "btn btn-secondary"
    }
  ];

  return (
    <BaseModal 
      title="Crear nuevo caso clínico"
      open={open}
      actions={actionButtons}
      handleClose={handleClose}
    >
      <form>
        <div className="form-group">
          <label htmlFor="Title">Título</label>
          <input 
            type="text"
            id="Title"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Description">Descripción</label>
          <textarea  
            type="text"
            id="Description"
            className="form-control"
            style={{minHeight: "100px"}}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Media">Archivo</label>
          <input  
            type="file"
            id="Media"
            className="ml-2"
          />
        </div>
      </form>
    </BaseModal>
  );
}

export default CreateCCaseDialog;