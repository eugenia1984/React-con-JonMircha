import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Componente from "./components/atoms/Componente";
import Estado from "./components/atoms/Estado";
import RenderizadoCondicional from "./components/atoms/RenderizadoCondicional";
import RenderizadoElementos from "./components/atoms/RendrizadoElementos";
import EventosES6 from "./components/atoms/EventosES6";
import EventosES7, { MasSobreEventos } from "./components/atoms/EventosES7";
import ComunicacionComponentes from "./components/atoms/ComunicacionComponentes";
import CicloVida from "./components/atoms/CicloVida";
import AjaxApis from "./components/atoms/AjaxApi";
import ScrollHooks from "./components/atoms/ScrollHooks";
import RelojHooks from "./components/atoms/RelojHooks";
import AjaxHooks from "./components/atoms/AjaxHooks";
import HooksPersonalizados from "./components/atoms/HooksPersonalizados";
import Referencias from "./components/atoms/REferencias";
import Formularios from "./components/atoms/Formularios";
import Estilos from "./components/atoms/estilos/Estilos";
import ComponenteEstilizado from "./components/atoms/estilos/ComponentesEstilizados";
import {
  Authorized,
  DisplayName,
  NameForm,
  Propiedades,
  Seasons,
  ContadorHooks,
} from "./components/atoms";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>
          <img src={viteLogo} alt="Vite logo" width="30" className="logo" />
          01 - React Basics
          <img src={reactLogo} width="30" alt="React logo" className="logo" />
        </h1>
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
            nombre: "María Eugenia Costa",
            correo: "costamariaeugenia1@gmail.com",
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
        <AjaxApis />
        <ContadorHooks />
        <ScrollHooks />
        <RelojHooks />
        <AjaxHooks />
        <HooksPersonalizados />
        <Referencias />
        <Formularios />
        <Estilos />
        <ComponenteEstilizado />
      </main>
    </>
  );
}

export default App;
