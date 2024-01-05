import './App.css'

import { useState } from 'react'

import OpenButton from './Components/Menu/Open/OpenButton'
import Apresentação from './Components/Apresentação/Apresentação'
import Projetos from './Components/Projetos/Projetos'

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
