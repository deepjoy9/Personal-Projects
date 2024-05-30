import Card from "./Card";
import projects from "../data/projects.json";

const CardList = () => {
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
