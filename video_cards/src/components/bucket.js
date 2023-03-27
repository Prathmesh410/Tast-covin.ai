import React from "react";

const Bucket = ({ bucketName, cards }) => {
  const filteredCards = cards.filter((card) => card.bucket === bucketName);

  return (
    <div>
      <h2>{bucketName}</h2>
      {filteredCards.map((card) => (
        <div key={card.id}>
          <h3>{card.name}</h3>
          <iframe src={card.url} width="560" height="315"></iframe>
        </div>
      ))}
    </div>
  );
};

export default Bucket;