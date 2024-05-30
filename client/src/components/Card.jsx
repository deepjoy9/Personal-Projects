const Card = ({ image, name, info, liveLink, sourceLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={name} className="project-image" />
      <div className="project-details">
        <h2 className="project-name">{name}</h2>
        <p className="project-info">{info}</p>
        <div className="project-links">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Live
          </a>
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
