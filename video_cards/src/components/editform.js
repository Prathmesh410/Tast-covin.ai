import React, { useState } from "react";
import axios from "axios";

const EditForm = ({ data, onClose }) => {
  const [formData, setFormData] = useState(data);
    console.log(data);
  const handleInputChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/cards/${data.id}`, formData);
      console.log(response.data);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <label>
        URL:
        <input type="text" name="url" value={formData.url} onChange={handleInputChange} />
      </label>
      <label>
        Bucket:
        <input type="text" name="bucket" value={formData.bucket} onChange={handleInputChange} />
      </label>
      <button type="submit">Update</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditForm;
