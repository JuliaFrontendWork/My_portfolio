import './header.scss';

function Header() {
  return (
    <section className="name">
      <div className="container">
        <h1 className="name__title">
          Hi, my name is <i>Julia</i>
          <br />
          <span>a frontend developer</span>
        </h1>
        <p className="name__paragrap">with passion for learning and creating.</p>
      </div>
    </section>
  );
}

export default Header;
