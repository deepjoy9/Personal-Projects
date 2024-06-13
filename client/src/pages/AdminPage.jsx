import CardList from "../components/CardList";
import AddProjectCard from "../components/AddProjectCard";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect } from "react";

const AdminPage = () => {
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  return (
    <div className="admin-page">
      <h1>Admin Page</h1>
      <div className="projects-list">
        <span className="projects-list-heading">Add Project :</span>
        <AddProjectCard />
        <span className="projects-list-heading">Projects List :</span>
        <CardList />
      </div>
    </div>
  );
};

export default AdminPage;
