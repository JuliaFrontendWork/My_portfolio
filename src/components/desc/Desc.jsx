import '../desc/desc.scss';
import { Trans, useTranslation } from 'react-i18next';

function Description() {
  const { t } = useTranslation();

  return (
    <section className="desc">
      <div className="container">
        <div className="desc__wrap">
          <div className="desc__text">
            <h1 className="desc__title">{t('title')}</h1>
            <p className="desc__about">
              <Trans
                i18nKey="aboutMe"
                components={{
                  1: <span className="highlight" />,
                  3: <span className="highlight" />,
                  5: <span className="highlight" />,
                  7: <span className="highlight" />,
                  9: <span className="highlight" />,
                  11: <span className="highlight" />,
                  13: <span className="highlight" />,
                  15: <span className="highlight" />,
                  17: <span className="highlight" />,
                  19: <span className="highlight" />,
                  21: <span className="highlight" />,
                  23: <span className="highlight" />,
                  25: <span className="highlight" />,
                  27: <span className="highlight" />,
                  29: <span className="highlight" />,
                }}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
