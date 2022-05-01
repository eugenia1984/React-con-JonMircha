import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import ComponenteFuncional from "./components/ComponenteFuncional";

function App() {
  let nombre = "Euge";
  let auth = false;
  let estaciones =["Primavera", "Verano", "Otoño", "invierno"];

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <section>
        <br />
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre"/>
        <h1>{nombre}</h1>
        <p>{auth ? "El usuario esta logueado" : "El usuario no esta logueado"}</p>
        <ul>
            {estaciones.map( (el, index) => 
            (<li key={index}>{el}</li>
            ))}
          </ul>
      </section>  
      <section>
        <Componente msg="Hola soy un Componente desde una prop" /> 
        <ComponenteFuncional msg="Hola soy un Componente Funcional desde una prop" />
        
      </section>
    </div>
  );
}

export default App;
