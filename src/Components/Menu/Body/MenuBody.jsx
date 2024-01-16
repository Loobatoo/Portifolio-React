import React from 'react';
import { useSpring, animated } from 'react-spring';
import CloseButton from '../Close/CloseButton';
import { FaLinkedin, FaWhatsappSquare, FaGithub } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import classes from './MenuBody.module.css';

const MenuBody = ({ Situation, SetSituation }) => {
  const sidebarAnimation = useSpring({
    transform: Situation ? 'translateX(0%)' : 'translateX(-100%)',
  });

  return (
    <animated.div className={classes.Container} style={sidebarAnimation}>
      <div className={classes.FirstLine}>
        <CloseButton Situation={Situation} SetSituation={SetSituation} />
        <h1> Pedro <span> Lobato </span> </h1>
        <a href=""> Home </a>
        <a href=""> Trabalhos </a>
        <a href=""> Sobre-mim </a>
      </div>
      <div className={classes.SecondLine}>
        <FaGithub className={classes.ReactIcons} />
        <FaLinkedin className={classes.ReactIcons} />
        <FaWhatsappSquare className={classes.ReactIcons} />
      </div>
    </animated.div>
  );
}

export default MenuBody;
