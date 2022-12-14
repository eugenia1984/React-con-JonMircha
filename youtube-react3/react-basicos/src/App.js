import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import ComponenteFuncional from "./components/ComponenteFuncional";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7,  MasSobreEventos } from "./components/Eventos";

function App() {
  let nombre = "Euge";
  let auth = false;
  let estaciones = ["Primavera", "Verano", "Otoño", "invierno"];

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <br />
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" />
          <h1>{nombre}</h1>
          <p>
            {auth ? "El usuario esta logueado" : "El usuario no esta logueado"}
          </p>
          <ul>
            {estaciones.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
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
        </section>
      </header>
    </div>
  );
}

export default App;
