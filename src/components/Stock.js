import React from "react";

function Stock({name, price, id, onClick}) {
  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={() => onClick(id)}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
