import { useTranslation } from 'react-i18next';
import ProjectsCard from './ProjectsCard';
import './project.scss';

function Projects() {
  const { t } = useTranslation();

  return (
    <section className="project">
      <div className="container">
        <h1 className="project__title">{t('projects')}</h1>

        <div className="project__card-wraper">
          <ProjectsCard />
        </div>
      </div>
    </section>
  );
}

export default Projects;
