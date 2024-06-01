import CardList from "../components/CardList";
import AddProjectCard from "../components/AddProjectCard";

const AdminPage = () => {
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
