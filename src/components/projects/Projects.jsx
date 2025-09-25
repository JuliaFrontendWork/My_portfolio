import ProjectsCard from './ProjectsCard';
import './project.scss';

function Projects() {
  return (
    <section className="project">
      <div className="container">
        <h1 className="project__title">Projects</h1>

        <div className="project__card-wraper">
          <ProjectsCard />
        </div>
      </div>
    </section>
  );
}

export default Projects;
