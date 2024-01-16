import React from 'react'

import MenuBody from '../Body/MenuBody'
import Button from '../../Button/Button'
import classes from './OpenButton.module.css'

import { useState } from 'react';
import { FaBars } from "react-icons/fa";

const OpenButton = () => {

  const [Situation, SetSituation] = useState(false)

  const HandleOpenMenu = (e) => {
    e.preventDefault()

    SetSituation(true)
  }

  return (
    <div className={classes.Container}>
      <MenuBody Situation={Situation} SetSituation={SetSituation}/>
      {Situation === false ? (
        <Button id={"Open"} Text={<FaBars/>} action={HandleOpenMenu}/>
      ) : null}
    </div>
  )  
}

export default OpenButton