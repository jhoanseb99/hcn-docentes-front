import React from "react";
import BaseDialog from "../../../components/UI/BaseDialog.jsx";

function CreateAnnDialog({ open, handleClose }) {
  
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
    <BaseDialog 
      title="Crear nuevo anuncio"
      open={open}
      actions={actionButtons}
      handleClose={handleClose}
    >
      <form>
        <div className="form-group">
          <label htmlFor="Title">Título del anuncio</label>
          <input 
            type="text"
            id="Title"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Description">Contenido del anuncio</label>
          <textarea  
            type="text"
            id="Description"
            className="form-control"
            style={{minHeight: "150px"}}
          />
        </div>
      </form>
    </BaseDialog>
  );
}

export default CreateAnnDialog;