import './App.css'

import StylesA from './Css Modules/Apresentação.module.css'
import StylesP from './Css Modules/Projetos.module.css'

import { Parallax,ParallaxLayer } from '@react-spring/parallax'

import Image from './Components/Image/Image'
import CardProjetos from './Components/CardProjetos/CardProjetos'

import ToTop from './Components/ToTop/ToTop'

function App() {

  return (
  <>
    <Parallax pages={2}>
      <ParallaxLayer speed={0.5} factor={1}>
        <div className={StylesA.Container}>
          <div className={StylesA.FirstText}>
              <h1>Olá, meu nome é <span>Pedro</span></h1>
              <span> Desenvolvedor Web </span>
            </div>
          <Image Img1={"./src/img/Img01.png"} Img2={"./src/img/Img02.png"}/>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5} factor={2}>
        <div className={StylesP.Container}>
            <h1> Meus Trabalhos: </h1>
            <h2> React </h2>
              <div className={StylesP.Grid}>
                <CardProjetos Image="./src/Img/Banners/10.png" Title="Calculadora Imc (Remastered)" Tech="React" Link="https://calculadora-imc-weld-six.vercel.app/"/>
                <CardProjetos Image="./src/Img/Banners/11.png" Title="Multi Step Form" Tech="React" Link="https://multi-step-form-ten-kappa.vercel.app/"/>
                <CardProjetos Image="./src/Img/Banners/12.png" Title="Contador" Tech="React" Link="https://contador-react-js-navy.vercel.app/"/>
              </div>
            <h2> JavaScript(ES6) </h2>
              <div className={StylesP.Grid}>
                <CardProjetos Image="./src/Img/Banners/1.png" Title="Clone apple page" Tech="Javascript, HTML e CSS" Link="https://projeto-pagina-de-vendas-apple.vercel.app/"/>
                <CardProjetos Image="./src/Img/Banners/3.png" Title="Calculadora IOS" Tech="Javascript, HTML e CSS" Link="https://calculadora-ios-kappa.vercel.app/"/>
                <CardProjetos Image="./src/Img/Banners/4.png" Title="QRcode generator" Tech="Javascript, HTML e CSS" Link="https://gerador-de-qr-code-javscript.vercel.app/"/>
                <CardProjetos Image="./src/Img/Banners/5.png" Title="Calculadora IMC (Version 1.0)" Tech="Javascript, HTML e CSS" Link="https://calculadora-imc-java-script-ashy.vercel.app/"/>
                <CardProjetos Image="./src/Img/Banners/7.png" Title="Login and Sign-In page" Tech="Javascript, HTML e CSS" Link="https://telalogin-vert.vercel.app/"/>
                <CardProjetos Image="./src/Img/Banners/8.png" Title="Tasker ( To do List )" Tech="Javascript, HTML e CSS" Link="https://project-to-do-list-one.vercel.app/"/>
                <CardProjetos Image="./src/Img/Banners/9.png" Title="Password Generator" Tech="Javascript, HTML e CSS" Link="https://password-generator-ruddy-two.vercel.app/"/>
              </div>
        </div>
      </ParallaxLayer>
    </Parallax>

    <ToTop />
  </>
  )
}

export default App
