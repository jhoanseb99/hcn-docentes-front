import React from "react";

function CardListContainer(props) {
  const { data } = props;

  return (
    <div className="container-fluid">
      {/* anuncios */}
      {data.map((value, index) => (
        <div key={index} className="row">
          {/* Card */}
          <div className="card custom-card p-3 mb-5 bg-white rounded">
            {/* Card::body */}
            <div className="card-body pt-3">
              {/* Card::body::title */}
              <div className="card-title">
                <div className="row">
                  <div className="col">
                    <strong className="align-self-center">{value.Title}</strong>
                  </div>
                  <div className="col text-right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardListContainer;
