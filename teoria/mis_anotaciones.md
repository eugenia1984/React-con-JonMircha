# :star: Mis anotaciones

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

### Tips

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

# :star: JSX

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

`id={nombre}`

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

por ejemplo voy a tener la varaible **auth** para saber si elusuario esta conectado o no y utilizo un _ternario_

`let auth = false;`

`<p>{auth ? "El usuario esta logueado" : "El usuario no esta logueado"}</p>`

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

`<p>{2+1}</p>`

- En base a un array puedo generar una lista:

` let estaciones =["Primavera", "Verano", "Otoño", "invierno"];`

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

Pero con la llegada de los **hooks** se usa cada vez menos crear componentes como clases. Ahora tenemos los **componentes funcionales**, por eso me ccreo el **ComponenteFuncional.js**, en este caso la **props** se pasa como parametro y no se utiliza el **this**:

```JavaScript
import React, {Component} from "react";

function ComponenteFuncional(props) {
  return <h2> {props.msg}</h2>;
}

export default ComponenteFuncional;
```

Y lo puedo hacer todavía más expresivo si lo declaro en una variable no espresada:

```JavaScript
import React, {Component} from "react";

const ComponenteFuncional = props => <h2> {props.msg}</h2>;

export default ComponenteFuncional;
```

Y en **App.js**:

```JavaScript
import ComponenteFuncional from "./components/ComponenteFuncional";
// Y dentro de function App() { return()}, dentro de una <section>
<ComponenteFuncional msg="Hola soy un Componente Funcional desde una prop" />

```

---

---

# :star: props

Las propiedades son valores que recibe un componente hijo de su componente padre, y se agrupan en un objeto llamado **props** y dentro cada atributo de ese objeto es una de las propiedades que le vas a pasar, es como agregarle un atributo a la etiqueta JSX.

Las **props** son _inmutables_ (no las puedes modificar, son valores de solo lectura).

Recibe como valor posible:

- Strings

- Numbers

-Booleans

- Arrays

- Objects

- Functions

- React Elements

- React Components

Si es un componente de clase, en el constructor se inicializan las props y luego se pueden utilizar con this.name.

Dentro de **components** creo **Propiedades.js** para ver este tema.

Me creo una list item con algunos de los tipos de valores que pueden tener las props, como el valor booleano no se renderiza lo hago con un ternario, y paso los valores no primitivos como arrays, object, funcion, elemento de React y React Component.

```JavaScript
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


Por terminal lo puedo instalar: ``` > npm i -S prop-types``` y en el **package.json** en *dependecies* veo **"prop-types": "^15.8.1",**

---
---

## :star: Estado

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

El estado lo defino en el constructor, va a ser el contador que inicializo en 0, y lo voy a utilizar con **this.state.contador** para renderizar en la etiqueta ```<p>```. Y utilizo el **setInterval** para ir actualizando el Estado, lo voy a ir sumando de uno en uno en cada segundo, asi se ve el virtual DOM que se va renderizando cada vez que se modifica el estado.

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

