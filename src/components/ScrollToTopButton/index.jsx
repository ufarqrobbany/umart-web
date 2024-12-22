import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaCaretUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of button when user scrolls
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div 
          style={styles.button} 
          onClick={scrollToTop}
        >
          <FaArrowUp/>
        </div>
      )}
    </>
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#FFC01E',
    color: '#353535',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '24px',
    zIndex: 1000,
  }
};

export default ScrollToTopButton;
