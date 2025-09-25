import './footer.scss';
import Inst from '../../img/instagram.svg';
import Twitter from '../../img/twitter.svg';
import GitHub from '../../img/gitHub.svg';
import Linked from '../../img/linkedIn.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__social">
            <a target="_blank" href="https://www.instagram.com/juliaperegorodo/" rel="noreferrer">
              <img src={Inst} alt="Instagram" />
            </a>
            <a target="_blank" href="https://x.com/peregorodo47471" rel="noreferrer">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a target="_blank" href="https://github.com/JuliaFrontendWork" rel="noreferrer">
              <img src={GitHub} alt="GitHub" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/julia-peregorodo-99556334a/"
              rel="noreferrer"
            >
              <img src={Linked} alt="LinkedIn" />
            </a>
          </div>

          <p className="footer__copirater">© 2025 frontend-dev.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
