import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // При каждом изменении пути — скроллим вверх
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null; // компонент ничего не рендерит
}

export default ScrollToTop;
