import './nav.scss';
import Sun from '../../img/Sun.svg';
import Moon from '../../img/Moon.svg';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
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
              Projects
            </NavLink>
            <NavLink
              to="/skils"
              className={({ isActive }) =>
                `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
              }
              end
            >
              Skills
            </NavLink>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
              }
              end
            >
              Contacts
            </NavLink>
          </div>

          <button className="dark-mode-btn">
            <img src={Sun} alt="Light mode" className="dark-mode-btn-icon" />
            <img src={Moon} alt="Night mode" className="dark-mode-btn-icon" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
