import React from 'react'

import classes from './MenuBody.module.css'

import CloseButton from '../Close/CloseButton';

import { FaLinkedin,FaWhatsappSquare,FaGithub } from "react-icons/fa";
import { FaX } from "react-icons/fa6"

const MenuBody = ({Situation, SetSituation}) => {
  return (
      <div className={classes.Container}>
          <div className={classes.FirstLine}> 
            <CloseButton Situation={Situation} SetSituation={SetSituation}/>
            <h1> Pedro <span> Lobato </span> </h1>

            <a href=""> Home </a>
            <a href=""> Trabalhos </a>
            <a href=""> Sobre-mim </a>

          </div>
          <div className={classes.SecondLine}>
            <FaGithub className={classes.ReactIcons}/>
            <FaLinkedin className={classes.ReactIcons}/>
            <FaWhatsappSquare className={classes.ReactIcons}/>
          </div>
      </div>
  )
}

export default MenuBody