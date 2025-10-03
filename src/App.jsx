import Nav from '../src/components/nav/Nav';
import Home from '../src/pages/Home';
import Footer from '../src/components/footer/Footer';
import Skils from './components/skils/Skils';
import Contacts from './components/contacts/Contacts';
import ProjectPage from './components/projectPage/ProjectPage';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';
import ScrollToTop from './components/scrollTop';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <ScrollToTop />
      <div className="main">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/skils"
              element={
                <PageTransition>
                  <Skils />
                </PageTransition>
              }
            />
            <Route
              path="/contacts"
              element={
                <PageTransition>
                  <Contacts />
                </PageTransition>
              }
            />
            <Route
              path="/project/:id"
              element={
                <PageTransition>
                  <ProjectPage />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}

export default App;

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
