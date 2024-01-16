import './App.css'

import { FaAngleUp } from "react-icons/fa6";

import OpenButton from './Components/Menu/Open/OpenButton'
import Apresentação from './Components/Apresentação/Apresentação'
import Projetos from './Components/Projetos/Projetos'
import Button from './Components/Button/Button'

function App() {

  return (
    <div>
      <OpenButton />
      <Apresentação />  
      <Projetos />
    </div>
  )
}

export default App
