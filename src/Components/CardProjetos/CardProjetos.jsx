import React from 'react';
import classes from './CardProjetos.module.css';

const CardProjetos = ({ Image, Title, Tech, Link }) => {

  return (
    <div className={classes.Card}>
      <img src={Image} alt="" className={classes.Image} />
      <div className={classes.CardInfo}>
        <p> {Title} </p>
        <p> Tecnologias: {Tech} </p>
        <a href={Link} target="_blank" rel="noopener noreferrer"> Projeto completo </a>
      </div>
    </div>
  );
};

export default CardProjetos;
