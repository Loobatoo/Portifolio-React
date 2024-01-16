import './App.css'


import OpenButton from './Components/Menu/Open/OpenButton'
import Apresentação from './Components/Apresentação/Apresentação'
import Projetos from './Components/Projetos/Projetos'
import ToTop from './Components/ToTop/ToTop';

function App() {

  return (
    <div>
      <ToTop />
      <OpenButton />
      <Apresentação />  
      <Projetos />
    </div>
  )
}

export default App
