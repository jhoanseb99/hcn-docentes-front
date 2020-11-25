import React from "react";

export default function Courses(){

  return (
    <div className="container">
      {/* titulo */}
      <div className="row pb-3">
        <h3 className="text-dark">Cursos</h3>
      </div>
      {/* anuncios */}
      <div className="row">
        {/* Card Columns */}
        <div className="card-columns">
          <div className="card shadow-sm p-3 mb-5 bg-white rounded">
            <div className="card-title text-center">
              <strong className="align-self-center">Curso #1</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}