import React from 'react'

import classes from './Projetos.module.css'
import CardProjetos from './SubComponents/CardProjetos'

const Projetos = () => {
    
  return (
    <div className={classes.Container}>
        <h1> Meus Trabalhos: </h1>
        <h2> React </h2>
          <div className={classes.Grid}>
            <CardProjetos Image="./src/Img/Banners/12.png" Title="Pedro" Tech="React" Link="https://www.youtube.com"/>
            <CardProjetos Image="./src/Img/Banners/11.png" Title="Pedro" Tech="React" Link="https://www.youtube.com"/>
            <CardProjetos Image="./src/Img/Banners/10.png" Title="Pedro" Tech="React" Link="https://www.youtube.com"/>
            <CardProjetos Image="./src/Img/Banners/9.png" Title="Pedro" Tech="React" Link="https://www.youtube.com"/>
            <CardProjetos Image="./src/Img/Banners/8.png" Title="Pedro" Tech="React" Link="https://www.youtube.com"/>
          </div>
        <h2> JavaScript(ES6) </h2>
          <div className={classes.Grid}>
            <CardProjetos Image="./src/Img/Banners/12.png" Title="Pedro" Tech="React" Link="https://www.youtube.com"/>
            <CardProjetos Image="./src/Img/Banners/11.png" Title="Pedro" Tech="React" Link="https://www.youtube.com"/>
            <CardProjetos Image="./src/Img/Banners/10.png" Title="Pedro" Tech="React" Link="https://www.youtube.com"/>
            <CardProjetos Image="./src/Img/Banners/9.png" Title="Pedro" Tech="React" Link="https://www.youtube.com"/>
            <CardProjetos Image="./src/Img/Banners/8.png" Title="Pedro" Tech="React" Link="https://www.youtube.com"/>
          </div>
    </div>
  )
}

export default Projetos