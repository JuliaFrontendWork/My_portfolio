import Nav from '../src/components/nav/Nav';
import Home from '../src/pages/Home';
import Footer from '../src/components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Skils from './components/skils/Skils';
import Contacts from './components/contacts/Contacts';
import ProjectPage from './components/projectPage/ProjectPage';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skils" element={<Skils />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
