# :star: Mis anotaciones


---

# :stars:  Creando el proyecto con CREATE-REACT-APP

Para crear la app -> `npx create-react-app react-basicos`

Para correr la app -> `npm start`

Con **Ctrl + C** detengo lo que estoy ejecutando en la terminal, asi puedo detener el start.

Para hacer el build -> `npm run build` y voy a ver el directorio **build** con su carpeta **statics** con las carpetas para los archivos _.css_ y _.js_ con código ofuscado/minificado y en version ES para que todos los browsers lo interpreten y también trae una carpeta _media_ y todos los archivos que estavan en la carpeta **public**.

Cuando ya termines tu app de React y la vayas a subir solo subis lo que se genera ahora en **build**.

Luego de hacer el `npm run build` por terminal recomiendan:

```
npm install -g serve
serve -s build
```

Y levanta un servidor como en desarrollo, para ver como va a quedar la app ya desplegada. Va a usar el **puerto 5000**

Para hacer las pruebas -> `npm run test` y me va a estar leyendo el archiv **App.test.js**

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

Para ejectar create react app (pierdo toda la configuracion que ya me trae creat react app y no necesito usar webpack) lo uso cuando necesito agregar alguna funcionalidad extra -> `npm run eject`. **OJO porque no hay rollback (no hay vuelta atras)**. Si te da **error** es porque al usar _create react app_ ya nos queda sincronizado con git, porque lo que si modifique el archivo y no comitee no me va a dejar, commiteo y ejecuto el comando.

---

---

# :stars: Tips

- En **Google Chrome** me bajo la extension **React developer Tools** y al inspeccionar en el navegador , en el menu de la caja de consula de desarrollo, veo **Components** y **Profiler**.

- Si trabajas con VSC es recomendable instalar la extension **Simple React Snippets**, para tener estos atajos:

| Snippet | Renders                                       |
| ------- | --------------------------------------------- |
| imr     | Import React                                  |
| imrc    | Import React / Component                      |
| imrd    | Import ReactDOM                               |
| imrs    | Import React / useState                       |
| imrse   | Import React / useState useEffect             |
| impt    | Import PropTypes                              |
| impc    | Import React / PureComponent                  |
| cc      | Class Component                               |
| ccc     | Class Component With Constructor              |
| cpc     | Class Pure Component                          |
| ffc     | Function Component                            |
| sfc     | Stateless Function Component (Arrow function) |
| cdm     | componentDidMount                             |
| uef     | useEffect Hook                                |
| cwm     | componentWillMount                            |
| cwrp    | componentWillReceiveProps                     |
| gds     | getDerivedStateFromProps                      |
| scu     | shouldComponentUpdate                         |
| cwu     | componentWillUpdate                           |
| cdu     | componentDidUpdate                            |
| cwun    | componentWillUnmount                          |
| cdc     | componentDidCatch                             |
| gsbu    | getSnapshotBeforeUpdate                       |
| ss      | setState                                      |
| ssf     | Functional setState                           |
| usf     | Declare a new state variable using State Hook |
| ren     | render                                        |
| rprop   | Render Prop                                   |
| hoc     | Higher Order Component                        |
| cp      | Context Provider                              |
| cpf     | Class Property Function                       |

---

---

# :stars: JSX

Es similar al HTML, pero es **JS** por eso tiene el atributo **className** ya que no se puede usar **class** por ser una palabra reservada.

Se pueden crear estructuras de control (for, if/else) , crear variables, aceptar argumentos, retornar funciones, hacer expresiones.

- Algunos atributos HTMl cambian:

**class** -> **className**

**for** como atributo en el `<form>` -> **htmlFor**

JSX se parece mucho a xml, ya que todas las etiquetas hay que cerrarlas, por ejemplo la de imagen queda : `<img ... />`

`<input ... />`

`<br />`

React lo transforma a elementos del DOM, con **React.createElement("div", null, "hola mundo")**:

- el segundo parametro son los atributos del div, va a ser un objeto con todos los atributos que tenga

- el tercer parametro es el contenido del div

```JSX
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

```JSX
<div className="container" id="hola">
  hola mundo
</div>
<article> </article>
```

-> me da el error de que **no se permiten elementos adyacentes JSX**

-> Para solucionarlo uso un **contenedor padre**

```JSX
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

```JSX
let nombre = "Euge";
<section>
  <div className="container" id="hola">
    hola mundo
  </div>
  <article> {nombre} </article>
</section>
```

-> Si quiero asignar la variable a un atributo del elemento JSX :

`id={nombre}`

```JSX
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

## Para trabajar con ternarios (CONDITIONAL RENDERING)

por ejemplo voy a tener la varaible **auth** para saber si elusuario esta conectado o no y utilizo un _ternario_

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

- Si quiero hacer un calculo aritmetico

`<p>{2+1}</p>`

- En base a un array puedo generar una lista:

` let estaciones =["Primavera", "Verano", "Otoño", "invierno"];`

```
<ul>
  {estaciones.map( el => (<li>{el}</li>))}
</ul>
```

Pero va a marcar un warning, de que cada elemento de las list item deben tener una **key**, eso lo necesita React, es un warning, es una mala practica, por eso aprovechamos y usamos el indice de la posicion del elemento del arreglo para usar de key.

```JSX
 <ul>
  {estaciones.map( (el, index) =>
  (<li key={index}>{el}</li>
  ))}
</ul>
```

---

Desde la versión 17 de React ya no es necesario importar React, con create-ract-app; pero... se puede ver como una mala practica, ya que en versiones anteriores a la 17 te estaría amrcando un error.

Entonces es mejor en **App.js** agregar:

```JavaScript
import React from "React"
```

---

---

# :stars: Creando y agregando un nuevo componente

En la carpeta **src** creo una nueva carpeta llamada **components** y dentro voy a crear un nuevo componente.

Hay distintas formas de nombrar un archivo, create-react-app utiliza la tecnica del **UpperCamelCase**, y pueden ser **.jsx** ó **.js**.

Entonces dentro de la carpeta components creo **Componente.js**.

Primero creo un componente basado en CLASES...

... Si lo desestructuro:

```JSX
import React, {Component} from "react"

class Componente extends Component {
  render() {  // el metodo render es el que le permite renderizar el codigo JSX

  }
}

// export Componente -> es una forma de exportarlo con la desestructuracion
export default Componente;
```

... si no lo desestructuro:

```JSX
import React from "React"

class Componente extends React.Component {}

export default Componente;
```

-> Entonces en **compnente.js** tengo:

```JSX
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

Y puedo simplificar la escritura asi:

```JSX
import Componente from './components/Componente';

// Y dentro de function App() { return()}
<section>
  <Component />
</section>
```

A este componente le puedo pasar una **propiedad**, entonces en el**App.js**:

```JSX
import Componente from './components/Componente';

// Y dentro de function App() { return()}
<section>
  <Componente msg="Hola soy un Componente" />
</section>
```

Y en **Componente.js** :

```JSX
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

Pero con la llegada de los **hooks** se usa cada vez menos crear componentes como clases. Ahora tenemos los **componentes funcionales**, por eso me ccreo el **ComponenteFuncional.js**, en este caso la **props** se pasa como parametro y no se utiliza el **this**:

```JSX
import React, {Component} from "react";

function ComponenteFuncional(props) {
  return <h2> {props.msg}</h2>;
}

export default ComponenteFuncional;
```

Y lo puedo hacer todavía más expresivo si lo declaro en una variable no espresada:

```JSX
import React, {Component} from "react";

const ComponenteFuncional = props => <h2> {props.msg}</h2>;

export default ComponenteFuncional;
```

Y en **App.js**:

```JSX
import ComponenteFuncional from "./components/ComponenteFuncional";
// Y dentro de function App() { return()}, dentro de una <section>
<ComponenteFuncional msg="Hola soy un Componente Funcional desde una prop" />

```

---

---

# :stars: PROPS

Las propiedades son valores que recibe un componente hijo de su componente padre, y se agrupan en un objeto llamado **props** y dentro cada atributo de ese objeto es una de las propiedades que le vas a pasar, es como agregarle un atributo a la etiqueta JSX.

Las **props** son _inmutables_ (no las puedes modificar, son valores de solo lectura).

Recibe como valor posible:

- Strings

- Numbers

- Booleans

- Arrays

- Objects

- Functions

- React Elements

- React Components

Si es un componente de clase, en el constructor se inicializan las props y luego se pueden utilizar con this.name.

Dentro de **components** creo **Propiedades.js** para ver este tema.

Me creo una list item con algunos de los tipos de valores que pueden tener las props, como el valor booleano no se renderiza lo hago con un ternario, y paso los valores no primitivos como arrays, object, funcion, elemento de React y React Component.

```JSX
import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return(
    <div>
      <h2>Propiedades: {props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano?"Verdadero":"Falso"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.nombre + "-" + props.objeto.apellido}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  )
}
// Puedo cargar una propiedad por defecto con .defaultProps
Propiedades.defaultProps = {
  porDefecto: "Las props",
}
//cuando me importo prop types puedo definir las caracteristicas de las propiedades, ais la propiedad numero solo recibe Number
Propiedades.propTypes = {
  numero:PropTypes.number.isRequired,
};
```

**numero:PropTypes.number.isRequired,** asi establezco que solo acepte Number y que sea requerido (obligatorio).

De este modo puedo definir que valores necesito o si es obligatorio.

-> Hay que acordarse de instalarlo como dependecia.

Y en **App.js**:

```JavaScript
import Propiedades from "./components/Propiedades";
// Y dentro del return en el div padre de los componentes
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
```

Antes ya venía integrado a la librería de React, luego lo decidieron sacar como módulo externo, pero al estilo de TS podemos definir que ciertos valores o ciertas props se inicialicen con un valor especial o que sean requeridos, para eso hay que importar el modulo **prop types**

Por terminal lo puedo instalar: ` > npm i -S prop-types` y en el **package.json** en _dependecies_ veo **"prop-types": "^15.8.1",**

---

---

## :stars: STATE

El conjunto de varaibles que intervienen en la modificacion de un Componente y como se encuentra en un momento dado.

Es estado es...

... inmutable

.. no lo podemos modificar directamente

... es asíncrono

React tiene el método **setState** para modificarlo.

El flujo corre en una sola dirección, desde el elemento padre a los hijos.

Desde antes de los hook solo un componente basado en clase podia tener estado y con **.setState** como el estado es un objeto se lo modifico.

Gracias a los hook los componentes basados en funciones tambien tienen estado

Creamos el archivo **Estado.js**:

Tengo el componente **Estado** basado en clase.

El estado lo defino en el constructor, va a ser el contador que inicializo en 0, y lo voy a utilizar con **this.state.contador** para renderizar en la etiqueta `<p>`. Y utilizo el **setInterval** para ir actualizando el Estado, lo voy a ir sumando de uno en uno en cada segundo, asi se ve el virtual DOM que se va renderizando cada vez que se modifica el estado.

```JavaScript
import React, { Component } from "react";

export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    setInterval(() => {
      this.setState({
        contador: this.state.contador +1
      });
    }, 1000);
  }
  render() {
    return(
      <div>
          <h2>El Estado</h2>
          <p>{this.state.contador}</p>
      </div>
    )
  }
}
```

-> El estado de un componente padre puede ser pasado como propiedad a un componente hijo

Para no tener que crear otro archivo y quede todo el tema junto, creo le componente **EstadoAHijo**:

```JavaScript
function EstadoAHijo(props) {
  return(
    <div>
      <h3>{props.contadorHijo}</h3>
    </div>
  )
}
```

Y en el return del componente padre **Estado**:

```JavaScript
return(
      <div>
          <h2>El Estado</h2>
          <p>{this.state.contador}</p>
          <EstadoAHijo contadorHijo={this.state.contador}/>
      </div>
    )
```

-> cada vez que este componente **EstadoAHijo** recibe la propiedad del componente padre **Estado** y la propiedad **contador** que se va actualizando, genera el renderizado (el pintado de la UI por **cambio de propiedad**).

---

---

## :stars: CONDITIONAL RENDERING

Es el renderizado de los componentes, cuando el estado de uun Componente cambia y obliga a que se vuelva a renderizar (repintar) la interface (UI).

Voy a crear el componente **RenderizadoCondicional.js**

Por ejemplo, tenemos un boton y dependiendo si estamos logueados o no, nos sale con le mensaje de login o logout.

Idealmente los componentes **Login** y **Logout** van a estar en su archivo independiente, pero ahora para tener todo lo relativo a renderizado condicional junto los tengo en el mismo archivo.

```JavaScript
import React, { Component } from "react";

function Login() {
  return(
    <div>
      <h3>Login</h3>
    </div>
  );
}

function Logout() {
  return(
    <div>
      <h3>Logout</h3>
    </div>
  );
}

export default class RenderizadoCondicional extends Component {
  render() {
    return(
      <div>
        <h2>Renderizado Condicional</h2>
        <Login />
        <Logout />
      </div>
    );
  }
}
```

Ahora le creo una variable de estado al componente de clase y en base a esa variable muestro un componente u otro, entonces ejecuto el constructor

```JavaScript
export default class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: true,
    };
  }
  render() {
    return(
      <div>
        <h2>Renderizado Condicional</h2>
        {this.state.session ? <Login /> : <Logout />}
      </div>
    );
  }
}
```

---

---

## :stars: Renderizado de elementos

Podes renderizar un **array**.

Es importante que cada uno tenga su **key**, va a ser su id unico que lo identifique para tener la referencia exacta en el virtual DOm y poder actualizar el elemento en el DOM real.

Creo el componente **RenderizadoElementos.js**

```JavaScript
import React, { Component } from "react";

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"]
    }
  }
  render() {
    return(
      <div>
        <h2>Renderizado de elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {
            this.state.seasons.map((el) => <li key={el}>{el}</li>)
          }
        </ol>
      </div>
    );
  }
}
```

Cuando necesitamso pintar elementos de manera dinamica **cada elemento de la lista debe de tener una llave unica**.

El atributo **key** lo utiliza React en su sintaxis JSX para asignarle un id y le sea más rápida la busqueda en su virtual DOM del elemento que si sufre un cambio tendra que volver a renderizar. Por eso en la etqieute `<li>` tengo **key={el}**, esta key es un atributo que no existe para el DOM:

```JavaScript
<ol>
  {this.state.seasons.map((el) => (
    <li key={el}>{el}</li>
  ))}
</ol>
```

Otro modo es darle como key el **index** para que la key sea el elemento dle arreglo:

```JavaScript
<ol>
  {this.state.seasons.map((el, index) => (
    <li key={index}>{el}</li>
  ))}
</ol>
```

Otro modo mas complejo seria llamar a una librería que genere id unicos.

Voy a simular la conexión a una API, con un archivo JSON, para ello creo la carpeta **helpers** dentro de **src** y guardare el archivo **data.json** para tener mi archivo json.

```JSON
{
  "frameworks": [
    {
      "id": 1,
      "name": "React",
      "web": "https://reactjs.org"
    },
    {
      "id": 2,
      "name": "Angular",
      "web": "https://angular.io"
    },
    {
      "id": 3,
      "name": "Vue",
      "web": "https://vuejs.org"
    },
    {
      "id": 4,
      "name": "Polymer",
      "web": "https://polymer-library.polymer-project.org/"
    },
    {
      "id": 5,
      "name": "Svelte",
      "web": "https://svelte.dev"
    }
  ]
}
```

Lo importo `import data from "../helpers/data.json";` el RenderizadoElementos.js y me creo un componente que se llama **ElementoLista**:

Asi utilizo del JSOn la url(web) y el nombre(name) del Framework.

```JavaScript
function ElementoLista(props) {
  return(
    <li>
      <a href={props.el.web} target="_blank">{props.el.name}</a>
    </li>
  )
}
```

Y dentro del **return** del elemento **RenderizandoElementos**, renderizo una lista desordenada con cada uno de los Frameworks, que van a ser los list items que son un anchor (llink).

```JavaScript
<ul>
  {
    data.frameworks.map((el)=> (
      <ElementoLista key={el.id} el={el}/>
  ))}
</ul>
```

---

---

# :stars: Eventos y Binding

El manejo de los eventos en JSX de React es similar a HTML, solo hay que recordar que se deve envolver entre {} y no se utilizan las comillas.

### Asignar eventos en componentes de clases

Creo el archivo **Eventos.js** para hacer un contador.

Los eventos en JSX con camelCase.

En JavaScript **this** tiene su contexto, se enlaza con **bind**, tengo que enlazar el this (contexto) de toda la clase para tener acceso al state.

Cada vez que se define un **evento** en un **componente basado en clase** hay que bindear en el **constructor**: **this.sumar = this.sumar.bind(this);**

```JavaScript
import React, { Component } from "react";

export default class Eventos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador:0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador:this.state.contador + 1,
    });
  }

  restar(e) {
    console.log("Restando");
    console.log(this);
    this.setState({
      contador:this.state.contador - 1,
    });
  }

  render() {
    return(
      <div>
        <h2>Eventos en Componentes de Clase</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}
```

-> Ya con los **hooks** se hacen **componentes funcionales**, desde la versión 16.0.8 de React. Pero esta bueno saber esto por si es un codigo en React de 4 años o más hacia atrás que se maneja con componente de clase (**class components**).

---

---

## :stars: Eventos y Property Initializers

Esta a partir de ES7, generando una variable **state** sin el **this** y utilizando las **arrow functions**.

En el mismo archivo de **Eventos.js** voy a hacerlo

---
---

## :stars:  Estilos en React

Hay muchas formas de aplicar estilos en React.

1. Con **CSS, en un archivo externo**, en el componente nombramos a la clase con **className**, y en un archivo **.css** nombramos a esa clase y le aplicams el estilo. Recordar siempre **importar la hoja de estilos** en el componente de React.

2. Aplicando **estilos en línea**, en este caso tengo que tener las {} porque voy a poner código JavaScript y luego dentro otras {} ya que v a aser un objeto, las key son los atributos de CSS que van en **camelCase** y el value es el valor del atributo, ace es todo como String por loq ue va entre **" "**. Ejemplo en código :

```JSX
<h3 className="bg-react" style={{borderRadius:".75rem", margin:"1rem"}}>Estilos en línea (atributo style)</h3>
```

Si voy a tener bastantes cosas de estilos en línea puedo guardarlo en una variable como un objeto.

```JSX
import React from "react";
import "./Estilos.css";

export default function Estilos() {
  let myStyles = {
    borderRadius: "5rem",
    margin: "2rem auto",
    maxWith: "50%",
  };

  return (
    <section className="estilos">
      <h2>Estilos CSS en React</h2>
      <h3 className="bg-react">Estilos en hojas CSS externa</h3>
      <h3
        className="bg-react"
        style={{ borderRadius: ".75rem", margin: "1rem" }}
      >
        Estilos en línea (atributo style)
      </h3>
      <h3
        className="bg-react"
        style={myStyles}
      >
        Estilos en línea (guardando en variable)
      </h3>
    </section>
  );
}
```

3. Aplicando **normalize** con **@import-normalize;** en una hoja superior, que rije toda la aplicación como un **index.css** o **App.css**.

4. Aplicando **estilos como módulos**. El nombre de la hoja de estilos debe ser : **Nombre.module.css**, por ejemplo ```Estilos.module.css```:

```CSS
.error {
  background-color: #dc3545;
}

.success {
  background-color: #198764;
}
```

Al importarlo le doy un alias: 
```JSX
import moduleStyles from "./Estilos.module.css";
```

Y lo utilizo:

```JSX
<h3 className={moduleStyles.error}>Estilos con módulos</h3>
      <h3 className={moduleStyles.success}>Estilos con módulos</h3>
```

5. Utilizando **SASS**, con la terminal: ```npm install node-sass```.

Y me creo el archivo de extensión **.scss**.

6. Con [**styled-components**](https://styled-components.com/).

Instalación:

```
# with npm
npm install --save styled-components

# with yarn
yarn add styled-components
```

**Single file component**, donde se tiene presentación, contenido y lógica del componente en un mismo archivo.

Tiene mapeado todos los elementos de React que luego se renderiza como **etiqueta HTML**, y con **template strings** le damos estilos.

En VSC es recomendable utilizar la extensión **styled-components-snippets** de **Jon Wheeler** para no ver los estilos como cadenas de texto.


-> Le paso un **color** como **propiedad**:

```JSX
<MyH3 color="#61dafb">
  Hola Soy un h3 estilizado con styled-components
</MyH3>
```

```JSX
const MyH3 = styled.h3`
  color: ${(props) => props.color};`
```

-> También lo puedo desestructurar y al ser JavaScript uedo usar **ternarios**:
```JSX
color: ${({ color }) => color || "#000"};
```

-> Puedo usar las **animaciones** con **keyframe**:

```JSX
import styled, {  keyframes} from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
    }
`;

  const MyH3 = styled.h3`
  animation: ${fadeIn} 5s ease-out;`
  ```

-> Con **ThemeProvider** puedo usar para el light / dark mode.

```JSX
import styled, {  ThemeProvider } from "styled-components";

const light = {
  color: "#222",
  bgColor: "#DDD",
};

const dark = {
  color: "#DDD",
  bgColor: "#222",
};

const Box = styled.div`
  padding: 1rem;
  margin: 1rem;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bgColor};
`;
```

Es como un proveedor, genera un **contexto**, me va a pedir un **objeto**, que pueden ser propiedades que voy a ir definiendo, en este ejemplo los **light** y **dark**.


-> Se puede trabajar **herencia**:

```JSX
const BoxRounded = styled(Box)`
  border-radius: 1rem;
`;
```

-> Aplicar **estilos globales**, se suelen aplicar en **index.css** o en **App.css**.

```JSX
const GlobalStyle = createGlobalStyle`
  h2 {
    padding: 2rem;
    background-color: #fff;
    color: #61dafb;
    text-transform: uppercase;
  }
`;
  ```

### ¿ Y cómo lo estructuramos ?

- Algunos nombran al archivo .css del mismo nombre que el componente y lo guardan en la misma carpeta.

- Dentro de la carpeta tiene un archivo **index.js** con el componente y otro **index.css** con los estilos.

---
