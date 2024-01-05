import React from 'react'

import MenuBody from '../Body/MenuBody'
import Button from '../../Button/Button'
import classes from './CloseButton.module.css'

import { useState } from 'react'
import { FaX } from "react-icons/fa6";

const CloseButton = ({Situation,SetSituation}) => {

  const HandleCloseMenu = (e) => {
    e.preventDefault()

    SetSituation(0)
  }

  return (
    <div>
      {Situation === 1 ? (
        <Button id={"Close"} Text={<FaX />} action={HandleCloseMenu}/>
      ) : (Situation === 1) ? (
        <MenuBody />
      ) : null}
    </div>
  )  
}

export default CloseButton