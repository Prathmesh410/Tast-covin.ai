import React from "react";

const Modal = ({ data, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{data.name}</h2>
        <iframe src={data.url} ></iframe>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;