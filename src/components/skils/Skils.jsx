import { useTranslation } from 'react-i18next';
import './skils.scss';

function Skils() {
  const { t } = useTranslation();

  return (
    <section className="skils">
      <div className="container">
        <h1 className="skils__title">{t('skills')}</h1>

        <h2 className="skils__title2">Frontend</h2>
        <p className="skils__paragrap2">
          JavaScript, ReactJS, HTML, CSS, SCSS, NPM, TypeScript, Redux Toolkit, React Router, Axios,
          Fetch
        </p>

        <h2 className="skils__title2">Backend</h2>
        <p className="skils__paragrap2">Basic knowledge: NodeJS, MySQL, PHP, Python</p>

        <h2 className="skils__title2">{t('languagesTitle')}</h2>
        <p className="skils__paragrap2">{t('languagesSkills')}</p>
      </div>
    </section>
  );
}

export default Skils;
