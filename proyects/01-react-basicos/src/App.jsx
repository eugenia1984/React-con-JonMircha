import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NameForm from './components/atoms/NameFom'
import DisplayName from './components/atoms/DisplayName'
import Authorized from './components/atoms/Authorized'
import Seasons from './components/atoms/Seasons'
import Componente from './components/atoms/Componente'
import Propiedades from './components/atoms/Propiedades'
import Estado from './components/atoms/Estado'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/atoms/RendrizadoElementos'
import EventosES6 from './components/atoms/EventosES6'
import EventosES7, { MasSobreEventos } from './components/atoms/EventosES7'
import ComunicacionComponentes from './components/atoms/ComunicacionComponentes'
import CicloVida from './components/atoms/CicloVida'

function App() {
  return (
    <>
      <header>
        <h1>01-React Basics</h1>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>
      <main>
        <NameForm />
        <DisplayName />
        <Authorized />
        <Seasons />
        <Componente msg="Hi, I am a class component, rendering a message from a prop." />
        <hr />
        <Propiedades
          cadena="This is a String"
          numero={19}
          booleano={true}
          arreglo={[1, 2, 3]}
          objeto={{
            nombre: 'María Eugenia Costa',
            correo: 'costamariaeugenia1@gmail.com'
          }}
          funcion={(num) => num * num}
          elementoReact={<i>This is a React Element</i>}
          componenteReact={<Componente msg="Component passed as prop" />}
        />
        <Estado />
        <RenderizadoCondicional />
        <RenderizadoElementos />
        <EventosES6 />
        <EventosES7 />
        <MasSobreEventos />
        <ComunicacionComponentes />
        <CicloVida />
      </main>
    </>
  )
}

export default App
