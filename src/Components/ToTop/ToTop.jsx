import React, { useState, useEffect } from 'react';
import classes from './ToTop.module.css';

import { FaArrowUp } from "react-icons/fa";

const ToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 5) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`${classes.BtnUp} ${isVisible ? '' : classes.BtnUpnone}`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default ToTop;
