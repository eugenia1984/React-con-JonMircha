# <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> 7 - Renderizado Condicional

En React, puedes crear distintos componentes que encapsulan el comportamiento que necesitas. Entonces, puedes renderizar solamente algunos de ellos, dependiendo del estado de tu aplicación.

El renderizado condicional en React funciona de la misma forma que lo hacen las condiciones en JavaScript. Puedes usar el condicional if o el operador ternario para crear elementos dinámicamente en base al valor del estado o las propiedades que recibe el componente.

Considera estos dos componentes:

```JavaScript
function SaludoUsuario(props) {
  return <h1>¡Bienvenid@ nuevamente!</h1>;
}
```

```JavaScript
function SaludoInvitado(props) {
  return <h1>Por favor, regístrate.</h1>;
}
```

Vamos a crear un componente Saludar que muestra cualquiera de estos componentes dependiendo si el usuario ha iniciado sesión o no:

```JavaScript
function Saludar(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <SaludoUsuario />;
  }
  return <SaludoInvitado />;
}

ReactDOM.render(
  // Intentar cambiando isLoggedIn={true}:
  <Saludar isLoggedIn={false} />,
  document.getElementById("root")
);
```

Con el operador ternario el código quedaría de la siguiente manera:

```JavaScript
function Saludar(props) {
  const isLoggedIn = props.isLoggedIn;

  return isLoggedIn ? <SaludoUsuario /> : <SaludoInvitado />;
}

ReactDOM.render(
  // Intentar cambiando isLoggedIn={true}:
  <Saludar isLoggedIn={false} />,
  document.getElementById("root")
);
```

---

## <img width="64" height="64" src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/external-note-pad-user-interface-flatart-icons-flat-flatarticons.png" alt="note pad"/> MIS ANOTACIONES

### <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> Para trabajar con ternarios (CONDITIONAL RENDERING)

Por ejemplo voy a tener la variable **auth** para saber si el usuario esta conectado o no y utilizo un _ternario_

```JSX
let auth = false;

<p>{auth ? "El usuario esta logueado" : "El usuario no esta logueado"}</p>
```

```JSX
function App() {
  let nombre = "Euge";
  let auth = false;
  
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre"/>
          <h1>{nombre}</h1>
          <p>{auth ? "El usuario esta logueado" : "El usuario no esta logueado"}</p>
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
      </div>
    </>
  );
}
```

---