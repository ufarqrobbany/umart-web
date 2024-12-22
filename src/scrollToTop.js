import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 0); // Coba dengan 100ms jika 0ms tidak bekerja
  }, [pathname]);
  
  

  return null;
}

export default ScrollToTop;
