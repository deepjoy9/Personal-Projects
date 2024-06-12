import { useEffect, useState } from "react";
import Card from "./Card";

const CardList = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((projects) => {
        setProjects(projects);
      })
      .catch((error) => {
        setError(error);
        console.error("Error fetching projects:", error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log("Projects:", projects);

  return (
    <div className="cards-wrapper">
      {projects.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          name={card.name}
          info={card.info}
          liveLink={card.liveLink}
          sourceLink={card.sourceLink}
        />
      ))}
    </div>
  );
};

export default CardList;
