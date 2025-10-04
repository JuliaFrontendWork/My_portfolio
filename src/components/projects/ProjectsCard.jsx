import enData from '../../data/card-eng.js';
import ukData from '../../data/card-ukr.js';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function ProjectsCard() {
  const { i18n } = useTranslation();
  const cardInfo = i18n.language === 'uk' ? ukData : enData;
  return (
    <div className="project__content">
      {cardInfo.map((card) => (
        <Link key={card.id} to={`/project/${card.id}`}>
          <div className="project__card">
            <div className="project__card-picture">
              <img src={card.image} alt={card.title} className="project__card-img" />
            </div>
            <h3 className="project__card-title">{card.title}</h3>
            <p className="project__text">{card.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProjectsCard;
