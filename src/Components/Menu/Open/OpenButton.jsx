import React from 'react'

import MenuBody from '../Body/MenuBody'
import Button from '../../Button/Button'
import classes from './OpenButton.module.css'

import { useState } from 'react';
import { FaBars } from "react-icons/fa";

const OpenButton = () => {

  const [Situation, SetSituation] = useState(0)

  const HandleOpenMenu = (e) => {
    e.preventDefault()

    SetSituation(1)
  }

  return (
    <div className={classes.Container}>
      {Situation === 0 ? (
        <Button id={"Open"} Text={<FaBars/>} action={HandleOpenMenu}/>
      ) : (Situation === 1) ? (
        <MenuBody Situation={Situation} SetSituation={SetSituation}/>
      ) : null}
    </div>
  )  
}

export default OpenButton