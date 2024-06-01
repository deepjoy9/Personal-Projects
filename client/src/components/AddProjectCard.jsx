import { Link } from "react-router-dom";

const AddProjectCard = () => {
  return (
    <div className="add-project-card">
      <div className="project-card">
        <img
          src="https://via.placeholder.com/300"
          alt=""
          className="project-image"
        />
        <div className="project-details">
          <h2 className="project-name">Project Name</h2>
          <p className="project-info">
            This is a short description of the project.
          </p>
          <div className="project-links">
            <Link to="/admin/add" className="project-link">
              Add Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProjectCard;
