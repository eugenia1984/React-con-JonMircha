import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import ComponenteFuncional from "./components/ComponenteFuncional";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import ComunicacionComponente from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApi";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";

function App() {
  let nombre = "Euge";
  let auth = false;
  let estaciones = ["Primavera", "Verano", "Otoño", "invierno"];

  return (
    <div className="App">
      <main className="App-main">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <hr />
        </section>
        <section>
          <br />
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" />
          <h1>{nombre}</h1>
          <hr />
          <p>
            {auth ? "El usuario esta logueado" : "El usuario no esta logueado"}
          </p>
          <hr />
          <ul>
            {estaciones.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
          <hr />
        </section>
        <section>
          <Componente msg="Hola soy un Componente desde una prop" />
          <hr />
        </section>
        <section>
          <ComponenteFuncional msg="Hola soy un Componente Funcional desde una prop" />
          <hr />
        </section>
        <section>
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={19}
            booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "Euge", apellido: "Costa" }}
            funcion={(num) => num * num}
            elementoReact={<i>Esto es un elemento React</i>}
            componenteReact={
              <Componente msg="Soy un componente pasado como prop" />
            }
          />
          <hr />
        </section>
        <section>
          <Estado />
          <hr />
        </section>
        <section>
          <RenderizadoCondicional />
          <hr />
        </section>
        <section>
          <RenderizadoElementos />
          <hr />
        </section>
        <section>
          <EventosES6 />
          <hr />
        </section>
        <section>
          <EventosES7 />
          <hr />
        </section>
        <section>
          <MasSobreEventos />
          <hr />
        </section>
        <section>
          <ComunicacionComponente />
          <hr />
        </section>
        <section>
          <CicloVida />
          <hr />
        </section>
        <section>
          <AjaxApis />
          <hr />
        </section>
        <section>
          <ContadorHooks />
          <hr />
        </section>
        <section>
          <ScrollHooks />
          <hr />
        </section>
        <section>
          <RelojHooks />
          <hr />
        </section>
        <section>
          <AjaxHooks />
          <hr />
        </section>
        <section>
          <HooksPersonalizados />
          <hr />
        </section>
        <section>
          <Referencias />
          <hr />
        </section>
      </main>
    </div>
  );
}

export default App;
