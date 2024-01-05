import React from 'react'

import classes from './Projetos.module.css'
import CardProjetos from './SubComponents/CardProjetos'

const Projetos = () => {
    
  return (
    <div className={classes.Container}>
        <h1> Meus Trabalhos: </h1>
        <h2> React </h2>
          <div className={classes.Grid}>
            <CardProjetos Image="./src/Img/Banners/10.png" Title="Calculadora Imc (Remastered)" Tech="React" Link="https://calculadora-imc-weld-six.vercel.app/"/>
            <CardProjetos Image="./src/Img/Banners/11.png" Title="Multi Step Form" Tech="React" Link="https://multi-step-form-ten-kappa.vercel.app/"/>
            <CardProjetos Image="./src/Img/Banners/12.png" Title="Contador" Tech="React" Link="https://contador-react-js-navy.vercel.app/"/>
          </div>
        <h2> JavaScript(ES6) </h2>
          <div className={classes.Grid}>
            <CardProjetos Image="./src/Img/Banners/1.png" Title="Clone apple page" Tech="Javascript, HTML e CSS" Link="https://projeto-pagina-de-vendas-apple.vercel.app/"/>
            <CardProjetos Image="./src/Img/Banners/3.png" Title="Calculadora IOS" Tech="Javascript, HTML e CSS" Link="https://calculadora-ios-kappa.vercel.app/"/>
            <CardProjetos Image="./src/Img/Banners/4.png" Title="QRcode generator" Tech="Javascript, HTML e CSS" Link="https://gerador-de-qr-code-javscript.vercel.app/"/>
            <CardProjetos Image="./src/Img/Banners/5.png" Title="Calculadora IMC (Version 1.0)" Tech="Javascript, HTML e CSS" Link="https://calculadora-imc-java-script-ashy.vercel.app/"/>
            <CardProjetos Image="./src/Img/Banners/7.png" Title="Login and Sign-In page" Tech="Javascript, HTML e CSS" Link="https://telalogin-vert.vercel.app/"/>
            <CardProjetos Image="./src/Img/Banners/8.png" Title="Tasker ( To do List )" Tech="Javascript, HTML e CSS" Link="https://project-to-do-list-one.vercel.app/"/>
            <CardProjetos Image="./src/Img/Banners/9.png" Title="Password Generator" Tech="Javascript, HTML e CSS" Link="https://password-generator-ruddy-two.vercel.app/"/>
          </div>
    </div>
  )
}

export default Projetos