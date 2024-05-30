import { useState } from "react";

const AddCard = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    info: "",
    liveLink: "",
    sourceLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    // Reset form data after submission
    setFormData({
      image: "",
      name: "",
      info: "",
      liveLink: "",
      sourceLink: "",
    });
  };

  return (
    <div className="add-card-form">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="info"
          placeholder="Project Description"
          value={formData.info}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="liveLink"
          placeholder="Live Link"
          value={formData.liveLink}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="sourceLink"
          placeholder="Source Link"
          value={formData.sourceLink}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default AddCard;
