import { useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../utils/apiConstants";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/admin/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Project added successfully!");
        // Reset form data after successful submission
        setFormData({
          image: "",
          name: "",
          info: "",
          liveLink: "",
          sourceLink: "",
        });
      } else {
        const errorData = await response.json();
        toast.error(`Error adding project: ${errorData.message}`);
      }
    } catch (error) {
      toast.error(`Error adding project: ${error.message}`);
    }
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
