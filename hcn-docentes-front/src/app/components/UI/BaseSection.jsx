import React from "react";

function BaseSection(props) {
  const { title, children, toolbar } = props;
  return (
    <div className="container">
      <div className="row pb-5">
        <div className="col">
          <h3 className="text-dark">{ title }</h3>  
        </div>
        <div className="col text-right">
          <div className="align-self-center ml-3">
            <a className="btn btn-primary btn-circle font-weight-bolder">Agregar</a> 
            <a className="btn btn-primary btn-circle font-weight-bolder ml-2">+</a> 
          </div>
        </div>
      </div>

      { children }

    </div>
  );
}

export default BaseSection;