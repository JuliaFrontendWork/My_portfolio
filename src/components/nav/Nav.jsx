import React, { useState } from 'react';
import './nav.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Nav() {
  const { i18n, t } = useTranslation();
  const [isFading, setIsFading] = useState(false);

  const toggleLanguage = () => {
    setIsFading(true);
    setTimeout(() => {
      i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en');
      setIsFading(false);
    }, 200);
  };

  return (
    <header className="header">
      <div className="container">
        <div className={`header__content ${isFading ? 'fade' : ''}`}>
          <div className="header__title">
            Freelancer <span>portfolio</span>
          </div>

          <div className="header__nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
              }
              end
            >
              {t('projects')}
            </NavLink>
            <NavLink
              to="/skils"
              className={({ isActive }) =>
                `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
              }
              end
            >
              {t('skills')}
            </NavLink>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
              }
              end
            >
              {t('contacts')}
            </NavLink>
          </div>

          <button className="dark-mode-btn" onClick={toggleLanguage}>
            {i18n.language === 'en' ? 'UKR' : 'ENG'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
