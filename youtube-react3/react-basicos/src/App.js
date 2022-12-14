import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import ComponenteFuncional from "./components/ComponenteFuncional";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7,  MasSobreEventos } from "./components/Eventos";
import ComunicacionComponente  from "./components/ComunicacionComponentes";

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
          <ComponenteFuncional msg="Hola soy un Componente Funcional desde una prop" />
          <hr />
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={19}
            booleano={true}
            arreglo={[1,2,3]}
            objeto={{nombre:"Euge", apellido:"Costa"}}
            funcion={num => num*num}
            elementoReact={<i>Esto es un elemento React</i>}
            componenteReact={<Componente msg="Soy un componente pasado como prop" />}
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <ComunicacionComponente />
          <hr />
        </section>
      </main>
    </div>
  );
}

export default App;
