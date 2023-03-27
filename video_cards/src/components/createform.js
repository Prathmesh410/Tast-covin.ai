import React, { useState } from "react";
import axios from "axios";

const CreateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    bucket: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreate = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/cards", formData);
      console.log(response.data);
      setFormData({
        name: "",
        url: "",
        bucket: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleCreate}>
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
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateForm;
