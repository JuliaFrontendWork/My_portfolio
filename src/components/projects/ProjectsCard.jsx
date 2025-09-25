import React from 'react';
import cardInfo from '../../data/card.json';
import { Link } from 'react-router-dom';

function ProjectsCard() {
  return (
    <div className="project__content">
      {cardInfo.map((card) => (
        <Link to={`/project/${card.id}`}>
          <div key={card.id} className="project__card">
            <div className="project__card-picture">
              <img src={card.image} alt={card.title} className="project__card-img" />
            </div>
            <h3 className="project__card-title">{card.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProjectsCard;
