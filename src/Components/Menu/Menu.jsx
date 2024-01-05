import React from 'react'
import { useState } from 'react';

import classes from './Menu.module.css'

import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

import Button from '../Button/Button';

const Menu = () => {

  const [Situation, SetSituation] = useState(0)

  const HandleMenu = (e) => {
    e.preventDefault()

    SetSituation(1)
  }

  return (
    <div className={classes.Container}>
      {Situation === 0 ? (
        <Button id={"Menu"} Text={<FaBars/>} action={HandleMenu}/>
      ) : (Situation === 1) ? (
        <FaBarsStaggered/>
      ) : null}
    </div>
  )  
}

export default Menu