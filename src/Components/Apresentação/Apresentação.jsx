import React from 'react'

import classes from './Apresentação.module.css'
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter'

const Apresentação = () => {

  const [text] = useTypewriter({
    words: ['Pedro Lobato'],
    loop: 1
  })

  return (
    <div className={classes.Container}>
        <div className={classes.FirstText}>
            <h1>Olá, meu nome é <span>{text}</span><Cursor cursorColor='#9ec4bb'/></h1>
            <span> Desenvolvedor Web </span>
        </div>
        <img src="./src/img/Img01.png" alt="" />
    </div>
  )
}

export default Apresentação