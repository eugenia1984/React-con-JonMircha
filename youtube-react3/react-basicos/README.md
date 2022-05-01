# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


---
---

# :star: Mis anotaciones

Para crear la app -> ```npx create-react-app react-basicos```

Para correr la app -> ```npm start```

Con **Ctrl + C** detengo lo que estoy ejecutando en la terminal, asi puedo detener el start.

Para hacer el build -> ```npm run build``` y voy a ver el directorio **build** con su carpeta **statics** con las carpetas para los archivos *.css* y *.js* con código ofuscado/minificado y en version ES para que todos los browsers lo interpreten y también trae una carpeta *media* y todos los archivos que estavan en la carpeta **public**.

Cuando ya termines tu app de React y la vayas a subir solo subis lo que se genera ahora en **build**.

Luego de hacer el ```npm run build``` por terminal recomiendan:

```
npm install -g serve
serve -s build
```

Y levanta un servidor como en desarrollo, para ver como va a quedar la app ya desplegada. Va a usar el **puerto 5000**

Para hacer las pruebas -> ```npm run test``` y me va a estar leyendo el archiv **App.test.js**

```
Press `a` to run all tests, or run Jest with `--watchAll`.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern. 
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.
```

Elegi la opción **a**

```
 PASS  src/App.test.js
  √ renders learn react link (82 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.273 s
Ran all test suites.

Watch Usage: Press w to show more.
```

Para ejectar create react app (pierdo toda la configuracion que ya me trae creat react app y no necesito usar webpack) lo uso cuando necesito agregar alguna funcionalidad extra -> ```npm run eject```. **OJO porque no hay rollback (no hay vuelta atras)**. Si te da **error** es porque al usar *create react app* ya nos queda sincronizado con git, porque lo que si modifique el archivo y no comitee no me va a dejar, commiteo y ejecuto el comando.

---
---

### Tips

- En **Google Chrome** me bajo la extension **React developer Tools** y al inspeccionar en el navegador , en el menu de la caja de consula de desarrollo, veo **Components** y **Profiler**.

- Si trabajas con VSC es recomendable instalar la extension **Simple React Snippets**, para tener estos atajos:

|Snippet	| Renders |
| ------- | ------- |
| imr	| Import React |
| imrc	| Import React / Component |
| imrd	| Import ReactDOM |
| imrs	| Import React / useState |
| imrse	| Import React / useState useEffect |
| impt	| Import PropTypes |
| impc	| Import React / PureComponent |
| cc	| Class Component |
| ccc	| Class Component With Constructor |
| cpc	| Class Pure Component |
| ffc	| Function Component |
| sfc	| Stateless Function Component (Arrow function) |
| cdm	| componentDidMount |
| uef	| useEffect Hook |
| cwm	| componentWillMount |
| cwrp	| componentWillReceiveProps |
| gds	| getDerivedStateFromProps |
| scu	| shouldComponentUpdate |
| cwu	| componentWillUpdate |
| cdu	| componentDidUpdate |
| cwun	| componentWillUnmount |
| cdc	| componentDidCatch |
| gsbu	| getSnapshotBeforeUpdate |
| ss	| setState |
| ssf	| Functional setState |
| usf	| Declare a new state variable using State Hook |
| ren	| render |
| rprop	| Render Prop |
| hoc	| Higher Order Component |
| cp	| Context Provider |
| cpf	| Class Property Function |

---
---


# :star: JSX

Es similar al HTML, pero es **JS** por eso tiene el atributo **className** ya que no se puede usar **class** por ser una palabra reservada.

Se pueden crear estructuras de control (for, if/else) , crear variables, aceptar argumentos, retornar funciones, hacer expresiones.

- Algunos atributos HTMl cambian:

**class** -> **className**

**for** como atributo en el ```<form>``` -> **htmlFor**

JSX se parece mucho a xml, ya que todas las etiquetas hay que cerrarlas, por ejemplo la de imagen queda : ```<img ... />```

```<input ... />```

```<br />```

React lo transforma a elementos del DOM, con **React.createElement("div", null, "hola mundo")**:

- el segundo parametro son los atributos del div, va a ser un objeto con todos los atributos que tenga

- el tercer parametro es el contenido del div

```
React.createElement(
  "div",
  {
    className: "container",
    id: "hola"
  },
  "hola mundo"
)
```

```
<div className="container" id="hola">
  hola mundo
</div>
```

**Toda estructura JSX debe estar empaquetada en un solo elemento contenedor**.

Entonces NO puedo hacer:

```
<div className="container" id="hola">
  hola mundo
</div>
<article> </article>
```

-> me da el error de que **no se permiten elementos adyacentes JSX**

-> Para solucionarlo uso un **contenedor padre**

```
<section>
  <div className="container" id="hola">
    hola mundo
  </div>
  <article> </article>
</section>
```

-> Desde las últimas versiones de React, tal vez por maquetaciones necesito elementos hermanos, por eso estan los **fragment** que crea un wraper vacío para cumplir con que no tengamos elementos adyacentes.

---

## Para trabajar con variables


Similar al template string, pero solo uso las llaves, no utilizo el símbolo $ ni las comillas francesas.

```
let nombre = "Euge";
<section>
  <div className="container" id="hola">
    hola mundo
  </div>
  <article> {nombre} </article>
</section>
```



-> Si quiero asignar la variable a un atributo del elemento JSX :

```id={nombre}```

```
let nombre = "Euge";
<section>
  <div className="container" id={nombre}>
    hola mundo
  </div>
  <article>
    <h1> {nombre}</h1>
    <h2> Subtitulo </h2>
  </article>
</section>
```


Tras bambalinas, lo que hace es:

```JavaScript
let nombre= "Euge";

/* #_PURE_*/
React.createElement(
  React.Fragment,
  null,
  /*#_PURE_*/ React.createElement(
    "div",
    {
      className: "container",
      id: "nombre"
    },
    "hola mundo"
  ),
  /*_PURE_*/ React.createElement(
    "article", 
    /*_PURE_*/ React.createElement("h1", null, nombre),
    /*_PURE_*/ React.createElement("h2", null, "Subtitulo")
    )
);
```

---

## Para trabajar con ternarios

por ejemplo voy a tener la varaible **auth** para saber si elusuario esta conectado o no y utilizo un *ternario*

```let auth = false;```

```<p>{auth ? "El usuario esta logueado" : "El usuario no esta logueado"}</p>```

```
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

- Si quiero hacer un calculo aritmetico

```<p>{2+1}</p>```

- En base a un array puedo generar una lista:

``` let estaciones =["Primavera", "Verano", "Otoño", "invierno"];```

```
<ul>
  {estaciones.map( el => (<li>{el}</li>))}
</ul>
```

Pero va a marcar un warning, de que cada elemento de las list item deben tener una **key**, eso lo necesita React, es un warning, es una mala practica, por eso aprovechamos y usamos el indice de la posicion del elemento del arreglo para usar de key.

```
 <ul>
  {estaciones.map( (el, index) => 
  (<li key={index}>{el}</li>
  ))}
</ul>
```



---
---

Desde la versión 17 de React ya no es necesario importar React, con create-ract-app; pero... se puede ver como una mala practica, ya que en versiones anteriores a la 17 te estaría amrcando un error.

Entonces es mejor en **App.js** agregar:

```JavaScript 
import React from "React"
```

---
---

## :star: Creando y agregando un nuevo componente

En la carpeta **src** creo una nueva carpeta llamada **components** y dentro voy a crear un nuevo componente.

Hay distintas formas de nombrar un archivo, create-react-app utiliza la tecnica del **UpperCamelCase**, y pueden ser **.jsx** ó **.js**.

Entonces dentro de la carpeta components creo **Componente.js**.

Primero creo un componente basado en CLASES...


... Si lo desestructuro:

```JavaScript
import React, {Component} from "react"

class Componente extends Component {
  render() {  // el metodo render es el que le permite renderizar el codigo JSX

  }
}

// export Componente -> es una forma de exportarlo con la desestructuracion
export default Componente;
```

... ni no lo desestructuro:

```JavaScript
import React from "React"

class Componente extends React.Component {}

export default Componente;
```

-> Entonces en **compnente.js** tengo:

```JavaScript
import React, {Component} from "React"

class Componente extends Component {
  render() {
    return <h2>Hola soy un componente</h2>;
  }
}

export default Componente;
```

Y en **App.js** lo mando a llamar:

```JavaScript
import Componente from './components/Componente';

// Y dentro de function App() { return()}
      <section>
        <Componente> </Componente>
      </section>
```

Y puedo ismplificar la escritura asi:

```JavaScript
import Componente from './components/Componente';

// Y dentro de function App() { return()}
      <section>
        <Component /> 
      </section>
```

A este componente le puedo pasar una **propiedad**, entonces en el**App.js** :


```JavaScript
import Componente from './components/Componente';

// Y dentro de function App() { return()}
      <section>
        <Componente msg="Hola soy un Componente" /> 
      </section>
```

Y en **Componente.js** :

```JavaScript
import Componente from './components/Componente';

// Y dentro de function App() { return()}
      <section>
        <Componente msg="Hola soy un Componente desde una prop" /> 
      </section>
```

Y en **Component.js**:

```JavaScript
import React, { Component } from "react";

class Componente extends Component {
  render() {
    return <h2>{this.props.msg}</h2>;
  }
}

export default Componente;
```


---

Pero con la llegada de los **hooks** se usa cada vez menos crear componentes como clases. Ahora tenemos los **componentes funcionales**, por eso me ccreo el **ComponenteFuncional.js**:

```JavaScript
import React, {Component} from "react";

function ComponenteFuncional(props) {
  return <h2> {props.msg}</h2>;
}

export default ComponenteFuncional; 
```

Y en **App.js**:

```JavaScript
import ComponenteFuncional from "./components/ComponenteFuncional";
// Y dentro de function App() { return()}, dentro de una <section>
<ComponenteFuncional msg="Hola soy un Componente Funcional desde una prop" />

```

```