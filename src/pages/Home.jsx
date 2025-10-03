import Header from '../components/header/Header';
import Projects from '../components/projects/Projects';
import Description from '../components/desc/Desc';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Description />
      <Projects />
    </div>
  );
}

export default Home;
