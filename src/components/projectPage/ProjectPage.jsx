import { useParams } from 'react-router-dom';
import cardInfo from '../../data/card-eng';
import './projectPage.scss';

function ProjectPage() {
  const { id } = useParams();
  const project = cardInfo.find((p) => p.id === id);

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <section className="project">
      <div className="container">
        <h1 className="project__title">{project.title}</h1>

        <div className="project__content-info">
          <a target="_blank" rel="noreferrer" href={project.linkWeb}>
            <img className="project__img-info" src={project.image} alt="Clothing store preview" />
          </a>

          <p className="project__paragraf-info">{project.skils}</p>

          <a target="_blank" rel="noreferrer" href={project.linkCode} className="project__btn-info">
            <img
              id="themeImage"
              src="/img/gitHub-black.svg"
              width="24"
              height="24"
              alt="GitHub icon"
            />
            GitHub repo
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;
