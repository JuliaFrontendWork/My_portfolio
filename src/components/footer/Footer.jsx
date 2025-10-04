import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__social">
            <a target="_blank" href="https://www.instagram.com/juliaperegorodo/" rel="noreferrer">
              <img src="../../img/instagram.svg" alt="Instagram" />
            </a>
            <a target="_blank" href="https://x.com/peregorodo47471" rel="noreferrer">
              <img src="../../img/twitter.svg" alt="Twitter" />
            </a>
            <a target="_blank" href="https://github.com/JuliaFrontendWork" rel="noreferrer">
              <img src="../../img/gitHub.svg" alt="GitHub" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/julia-peregorodo-99556334a/"
              rel="noreferrer"
            >
              <img src="../../img/linkedIn.svg" alt="LinkedIn" />
            </a>
          </div>

          <p className="footer__copirater">© 2025 frontend-dev.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
