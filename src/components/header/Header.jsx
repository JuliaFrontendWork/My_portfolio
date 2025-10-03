import './header.scss';
import { Trans, useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <section className="name">
      <div className="container">
        <h1 className="name__title">
          <Trans i18nKey="greeting" components={{ 1: <i />, 2: <br />, 3: <span /> }} />
        </h1>
        <p className="name__paragrap">{t('tagline')}</p>
      </div>
    </section>
  );
}

export default Header;
