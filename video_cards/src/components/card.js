import React from "react";

const Card = ({ data, onCardClick }) => {
  return (
    <div className="card" onClick={() => onCardClick(data)}>
      <h2>{data.name}</h2>
      <p>{data.bucket}</p>
    </div>
  );
};

export default Card;