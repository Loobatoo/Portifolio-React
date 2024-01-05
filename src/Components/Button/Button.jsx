import React from 'react'

import classes from './Button.module.css'

const Button = ({id, Text, action, disabled}) => {

  const HandleAction = (e) => {
    e.preventDefault()
    action(e);
  }

  return (
    <button  id={`${classes[id]}`} onClick={HandleAction} disabled={disabled}> {Text} </button>
  )
}

export default Button