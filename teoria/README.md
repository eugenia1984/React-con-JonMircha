# :book: Curso de React con Jon Mircha

---

Temas:

- 1 - Introduccion : ¿Por qué usarlo?, ¿ Quien lo usa ?, entorno y Herramientas de Desarrollo.

- 2 - Create React App: ¿Qué incluye create-react-app?, estructura de carpeta, hot reloading

- 3 - JSX: JSX se transforma en JavaScript, mezclando JSX con JavaScript, estilos CSS inline en JSX, eventos del DOM en JSX

- 4 - Componentes: tipos de Componentes, utilizando componentes

- 5 - Propiedades

- 6 - Estado

- 7 - Renderizado Condicional

- 8 - Renderizado de Elementos

- 9 - Eventos

- 10 - Comunicación entre componentes: comunicación entre un componente padre a uno hijo, comunicación entre un componente hijo y su padre, comunicación entre componentes no relacionados.

- 11 - Ciclo de Vida: montaje, actualización, desmontaje

- 12 - Hooks: ¿Por qué se crearon los Hooks?, preguntas frecuentes, tipos de Hooks

- 13 - Aprende más

---

# :star: 1 - Introducción

React es una **biblioteca JavaScript** altamente eficiente y **declarativa** que se utiliza para crear **interfaces de usuario interactivas**.

Fue creado por el ingeniero de Facebook Jordan Walke y se lanzó en mayo de 2013.

En los últimos años, ha superado a sus rivales y ha establecido firmemente su dominio.

React te insita a crear **código declarativo** (indicas el qué, no el cómo) y **orientado a componentes**.

Un **componente** es un pieza de código que puede representar una parte de la interfaz de usuario o una funcionalidad en particular que se puede encapsular y reutilizar en diferentes partes de un desarrollo o incluso en diferentes aplicaciones.

Cada componente reaccionará a **cambios internos** (en su estado -**state**- con las funciones (eventos) desde un componente hijo a un componente padre) o externos (nuevas propiedades recibidas -**new props** para la comunicación entre un componente padre hacia sus componentes hijos-) y se volvera a redibujar (**renderizado**) en la interfaz. Para ello React utiliza su **Virtual DOM** que es una copia del DOM original del navegador para sólo hacer los cambios necesarios en los nodos que hayan reaccionado y evitar redibujar todo el árbol del DOM.

Para poder interactuar con la interfaz React tiene **eventos sintéticos** que son una abstracción de los eventos nativos de los navegadores, para mejorar la compatibilidad y evitar el uso de librerías para crossbrowsing (bye bye jQuery 🤭).

---

## ¿Por qué usarlo?

**Ventajas**:

- **Alto rendimiento**: React es conocido por su **alta eficiencia y flexibilidad**. Se puede integrar fácilmente con diferentes tecnologías. Se puede usar tanto para el lado del cliente como para el lado del servidor.

- **Recursos abundantes** : como Facebook la mantiene, existe una **gran cantidad de documentación y recursos disponibles** en la web que hace que la curva de aprendizaje sea muy fluida.

- **Compatibilidad con versiones anteriores** : la transición o migración de versiones anteriores a nuevas es bastante fácil y retrocompatible.

- **Estructura de componentes fácil de mantener**: la arquitectura basada en componentes de React ayuda a aumentar la **reutilización del código** y facilita bastante el **mantenimiento de proyectos a gran escala**.

- **Fuerte Comunidad**: React tiene más de 1300 colaboradores en GitHub. Documentación Multi idioma: Actualmente React tiene su documentación en diferentes idiomas entre ellos el español.

- **Flujo de datos unidireccional**: el enlace de datos **unidireccional y hacia abajo** (de componentes padres a hijos), ayuda a garantizar que los cambios realizados en la estructura del componente hijo no afecten la estructura del componente padre.

**Desventajas**:

- **Complejo**: muchos desarrolladores pueden encontrar en un inicio demasiado compleja la curva de aprendizaje de React en comparación con otros frameworks como el caso de Vue. Dicha complejidad puede ser innecesaria para proyectos a pequeña escala.

- **JSX**: el uso de JSX agrega otra capa de complejidad. JSX es un preprocesador que agrega extensión de sintaxis XML a JavaScript. Aunque JSX ayuda a codificar el código React de una manera más segura y rápida, puede ser difícil de comprender para los nuevos desarrolladores.

- **Necesidad de un ecosistema de muchas herramientas**: React requiere una amplia gama de herramientas para funcionar correctamente y ser compatible con otras tecnologías.

- **Problemas de SEO**: se sabe que las SPAs (Single Page Applications) creadas con React se enfrentan a problemas de indexación por parte de los rastreadores y bots de motores de búsqueda.

---

## ¿Quién lo usa?

Grandes empresas como Netflix, Yahoo, Airbnb, Instagram, Facebook, WhatsApp, PayPal, Microsoft, la BBC, Aeroméxico, etc. Incluso grandes sitios de información y noticias que antes usaban WordPress se están migrando a sitios hechos con JAM stack y React como librería principal, tal es el caso de Smashing Magazine.

Estadísticas que respaldan su uso:

[Google Trends](https://trends.google.com.mx/trends/explore?q=react,angular,vue)

[NPM Trends](https://www.npmtrends.com/react-vs-angular-vs-vue)

[Stack Overflow Trends](https://insights.stackoverflow.com/trends?tags=reactjs%2Cangular%2Cvue.js)

[State of JavaScript](https://2020.stateofjs.com/en-US/)

---

## :star: Entorno y Herramientas de Desarrollo

React es una librería y no técnicamente un framework. Por lo que sólo maneja la capa de Vista, tomando como referencia el modelo MVC (Modelo Vista Controlador) para el desarrollo de aplicaciones web. Sin embargo cuenta con una amplia gama de herramientas, librerías y frameworks para complementar su entorno de desarrollo, por ejemplo:

**Node.js** y **NPM**: Para ejecutar el entorno de desarrollo e instalar dependencias.

**Yarn**: Un gestor de paquetes JavaScript.

**Webpack**: Es un empaquetador de archivos para aplicaciones JavaScript.

**React Router**: Librería para manejar rutas declarativas.

**Redux**: Es una librería para gestionar el estado de las aplicaciones JavaScript.

**Flux**: Es la arquitectura de aplicaciones que Facebook usa para crear aplicaciones web del lado del cliente.

**Create React App**: Un conjunto de configuraciones preestablecidadas para comenzar a trabajar con React ejecutando un sólo comando.

**Gatsby**: Es un framework basado en React para desarrollar rápidamente sitios y aplicaciones web, usando diferentes fuentes de datos como CMS, Markdowns, APIs, etc.

**Next.js**: Es un framework basado en React para desarrollar sitios estáticos y aplicaciones del lado del servidor (SSR - Server Side Rendering).

**GraphQL**: Es un lenguaje de consulta de datos para APIs.

**React Bootstrap**: Es la versión del popular framework frontend Bootstrap pero creado con componentes hechos en React.

**Material UI**: Es un framework frontend inspirado en Material Design creado con componentes hechos en React.

**React Native**: Es un framework basado en React para la creación de aplicaciones móviles y nativas.

**React Dev Tools Chrome**: Es una extensión para Chrome que agrega de herramientas de depuración para React.

**React Dev Tools Firefox**: Es una extensión para Firefox que agrega de herramientas de depuración para React.

**Simple React Snippets for VSCode**: Es una extensión para Visual Studio Code que nos permite usar atajos para agilizar la escritura de código React.

---

# :star: 2 - CRA (Create React App)

[https://create-react-app.dev/](https://create-react-app.dev/)

Aunque existen varias formas de empezar con React, una manera sencilla y eficiente es con `create-react-app`, una aplicación de consola que nos va a permitir crear aplicaciones React con cero configuración, lo que nos permitirá centrarnos en los más importante: Programar en React.

Para crear una aplicación utilizamos el comando npx create-react-app seguido del nombre que le quieras dar a tu aplicación. Por ejemplo:

```
npx create-react-app my-app
```

Cuando ejecutas ese comando `create-react-app` va a crear una carpeta llama `my-app` con una serie de archivos y subcarpetas para que puedas empezar a trabajar en tu proyecto.

Ingresa a la carpeta `my-app` y ejecuta el proyecto con los siguientes comandos:

```
cd my-app
npm start
```

El último comando ejecuta el servidor de desarrollo y abre un navegador con una pantalla de bienvenida.

¡Felicidades!, has creado tu primera aplicación con React.

En consola, cuando esta todo ok se ve:

```
Success! Created react-basicos at C:\Users\juan\Desktop\react_jonmircha\youtube-react\react-basicos
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd react-basicos
  npm start

Happy hacking!
```

---

## ¿Qué incluye create-react-app?

Un proyecto creado con create-react-app, además de React, incluye librerías como:

- **Webpack**: que se encarga de procesar y empaquetar nuestro código JavaScript (con sus dependencias), archivos CSS y otros archivos estáticos como imágenes, vectores, fuentes, etc.

- **Babel**: que nos permite usar nuevas características de ECMAScript.

- **PostCSS** que es una librería para el procesamiento de CSS.

- **Jest** y **Testing Library** que son librerías para testing.

- etc.

Uno podría configurar un proyecto de React manualmente e incluir cada una de estas librerías, pero es bastante engorroso, create-react-app nos hace la vida más fácil.

---

## Estructura de carpeta

`create-react-app` crea la siguiente estructura de archivos y carpetas:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

Los dos archivos más importantes son:

**public/index.html** - la plantilla HTML de la aplicación.

**src/index.js** - el punto de entrada JavaScript de la aplicación.

Puedes eliminar o renombrar otros archivos según tus necesidades.

Dentro de **src** se incluyen todos los archivos JavaScript y CSS de tu aplicación. Es la carpeta donde irá el código de desarrollo. Está el *App.css\*\*, el *App.js\** y el *App.test.js\*.

También es recomendable incluir otros archivos estáticos como imágenes y fuentes en esta carpeta. Puedes crear subcarpetas para organizar mejor los archivos.

En **public** van todos los archivos estáticos que necesites incluir en la plantilla **public/index.html**. Aca van todos los assets: favicon.ico, index.html, manifest.json(para hacerla progresive web app), dos logos en distinto tamaño.

Puedes crear otras carpetas además de **src** y **public**. Estas carpetas no van a ser incluídas en el paquete de distribución.

Está también la carpeta **node_modules** con las dependencias.

Las carpetas **public** y **src** se ejecutan en el modo de desarrollo, lueg en el proceso dle BUILD se va a crear la carpeta **build**

- Si utilizamos Visual Studio Code podemos agregar a extensión **Simple React Snippets** que nos va a agilizar el desarrollo.

### Scripts

En la carpeta del proyecto **package.json** puedes ejecutar los siguientes comandos:

`npm start` - inicia el servidor de desarrollo y abre un navegador con la aplicación.

`npm test` - ejecuta las pruebas.

`npm run build` - empaqueta la aplicación para producción en la carpeta build.

`npm run eject` - permite cambiar manualmente las librerías y configuración que utiliza `create-react-app` por defecto. Ten cuidado con este comando, una vez que se expulsa la configuración inicial no hay vuelta atrás.

En el archivo **package.json** los veo:

```JavaScript
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```

---

## Hot reloading

Una de las funcionalidades más importantes de los proyectos creados con create-react-app es la capacidad de hacer cambios en vivo sin necesidad de reiniciar el servidor. Si haces un cambio en algún archivo en src o public el navegador se refresca automáticamente.

---

# :star: 3 - JSX

Es una extensión de la sintaxis de JavaScript que produce elementos de React. No es HTML.

Se puede usar:

- Dentro de estructuras de control como if, for, ciclos.

- Asignarlo a variables.

- Aceptarlo como argumento o retorno en funciones.

- Expresiones JavaScript.

Veamos un ejemplo tomado del código que genera create-react-app:

```JSX
<div className="App">
  <header className="App-header">
    <img src="{logo}" className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React</h1>
  </header>
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
</div>
```

JSX es similar a HTML pero con algunas diferencias importantes:

Algunas reglas importantes:

Toda etiqueta debe cerrarse por ejemplo `<br>` debera cerrarse a `<br />`.

Los componentes deben devolver un sólo elemento padre.

Algunos atributos HTML cambian como:

-> **class** por **className**.

-> **for** por **htmlFor**.

Es muy similar a XML (toda etiqueta debe cerrarse)

Los atributos de un elemento JSX pueden aceptar valores de tipo String entrecomillados o expresiones JavaScript entre llaves, por ejemplo:

```JSX
<img alt="Avatar" src={user.avatarURL} />
```

---

## JSX se transforma en JavaScript

React lo transforma a un elemento del DOM, lo vemos en Babeljs.io.

Por debajo JSX se transforma en código JavaScript.

Por ejemplo, el siguiente código JSX:

```HTML
<div class="active">Hola Mundo</div>
```

se transforma en el siguiente código JavaScript:

```JSX
React.createElement("div", { className: "active" }, "Hola mundo");
```

Puedes utilizar el REPL de Babel para ver en qué se convierte el código JSX que escribes.

La ventaja de JSX es que, como es JavaScript, podemos:

- Ver algunos errores en tiempo de compilación.

- Asignar JSX a variables.

Por ejemplo:

```JSX
const el = <p>Hola</p>;
Retornar JSX desde métodos. Por ejemplo:

 renderText() {
   if (someCondition) {
     return <p>Hola</p>;
   } else {
     return <p>Mundo</p>;
   }
 }
```

-> Una restricción de JSX es que siempre debes tener **un elemento raíz**, si tenemos dos o más debemos encerrarlos entre un **fragment** `<> </> ` o un contenedor pdre como un `<div> </div>`:

```JSX
const el = (
  <div>
    <p>Hola</p>
    <p>Mundo</p>
  </div>
);
```

Este es un patrón muy común en las aplicaciones de React.

---

## Mezclando JSX con JavaScript

Para mezclar código JavaScript en JSX utiliza corchetes (**{}**):

```JSX
const style = "active";
const title = "Hola Mundo";

<div className={style}>{title}</div>;
```

Una restricción de JSX es que no puedes utilizar if, else, while o for.

Para agregar condicionales utiliza el operador ternario:

```JSX
<div>
  {
    condition
      ? <h1>Hola Mundo</h1>
      : null
  }
</div>
```

Para mostrar elementos de un arreglo o un objeto utiliza map:

```JSX
const names = ["Jon", "Irma", "kEnAi"];

const jsx = (
  <ul>
    {names.map((name, index) => (
      <li key={index}>{name}</li>
    ))}
  </ul>
);
```

---

## Estilos CSS inline en JSX

Es posible definir y utilizar estilos inline en JSX:

```JSX
let styles = {
  borderColor: "#999",
};

const jsx = <div style={styles}>Hola mundo</div>;
```

---

## Eventos del DOM en JSX

En JSX se utilizan los eventos estándar del DOM como onclick, onchange, onkeydown, ... pero utilizando camelCase: onClick, onChange, onKeyDown, ...

```JSX
<button onClick={alert("Hola")}></button>
```

Fíjate que utilizamos corchetes (**{}**) para escribir nuestro código JavaScript.

También podríamos pasar una función que es invocada cuando se genere el evento:

```JavaScript
const saludar = () => alert("Hola!");

<button onClick={saludar}></button>;
```

Fíjate que no estamos invocando la función saludar, sólo la estamos pasando para que React la invoque cuando ocurra el evento.

---

# :star: 4 - Componentes

En React se introduce el concepto de componentes para crear la **interfaz gráfica** de nuestra aplicación.

Permiten separar el código y los elementos de la interfaz en pequeñas piezas independientes y reutilizables que estarán aisladas una de otras.

El objetivo es que cada componente sea independiente y encapsule su marcado, estilos y estado. De esa forma los componentes pueden ser reutilizables y la interfaz gráfica más fácil de mantener y evolucionar.

Los componentes pueden tener **estado**.

Se le pueden pasar datos a un componente a través de algo llamado **props** y devuelven a React elementos que describen lo que debe verse en pantalla.

En React los datos fluyen de forma **unidireccional**, **de componentes padres a componentes hijos**.

React te permite definir componentes como **clases** o como **funciones**.

## Tipos de Componentes

Como una **clase** que extiende de Component con un **método render**:

```JavaScript
import React, { Component } from "react";

class Title extends Component {
  render() {
    return <h1>Hola mundo</h1>;
  }
}
```

O como una **función** que retorna lo que se va a renderizar (con el **return**):

```JavaScript
const Title = () => {
  return <h1>Hola Mundo</h1>;
};
```

Pero al introducir los **hooks** se pueden crear componentes basados en funciones pero que también tienen un **estado**

## Utilizando componentes

Para utilizar un componente debes importarlo y después incluirlo en tu JSX como se muestra en el siguiente ejemplo:

```JSX
import React from "react";
import Title from "./Title";

function App {
    return <Title />;
}
```

-> **Ya no es necesario hacer import React from "react" desde REact 17 en adelante** -> no es necesario importar la librería, la menos con create react app. Pero... se considera como una mala práctica, ya que las versiones anteriores te marca un error, entonces aunque ahora se puede no iportar es mejor importarlo.

---

# :star: 5 - Propiedades (props)

Son **valores que recibe un componente hijo de su componente padre**. Se agrupan en un objeto llamado **props**, el cual puede recibir diferentes tipos de datos, como:

- Strings

- Numbers

- Booleans

- Arrays

- Objects

- Functions

- React Elements

- React Components

Las props son inmutables, es decir, **son valores de sólo lectura**, no se pueden modificar.

Es como agregarle un atributo a una etiqueta JSX.

El componente las recibe como atributos que se pasan a través de JSX.

Por ejemplo, podemos pasar un atributo name al componente Welcome:

```JSX
<Welcome name="Jon" />
<Welcome name="Irma" />
```

- Si defines el componente en una clase, las props se reciben en el **constructor de la clase**:

```JavaScript
class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{this.props.name}</h1>;
  }
}
```

- Si defines el componente como una función, las props se reciben como un **parámetro de la función**:

```JavaSCript
const Welcome = (props) => {
  return <h1>{props.name}</h1>;
};
```

Se puede recibir como parametro a **prop** y luego la llamo como **prop.nombreDeLaProp** y sino la puedo desestructurar al recibirla como parametro **{ nombreDeLaProp }** entonces no es necesario luego la usarla llamar a props. sino directamente escribo el nombre de la prop.

---

# :star: 6 - Estado (state)

El **state** son los **valores internos** (variables) que manejan la lógica y los datos de un componente, permite que éste **reaccione a cualquier cambio** lo que hará que **se vuelva a renderizar en la interfaz (UI)**.

El estado tiene 3 características importantes:

- Es **inmutable**, si se modifica se genera una copia, se le agrega lo que cambio y se genera un nuevo estado.

- No se puede modificar directamente, por eso utilizamos \*_setState_()\*.

- Es **asíncrono**.

El estado de un componente no es accesible desde otro componente excepto de aquel que lo posee y lo asigna.

La propagación del estado fluye de forma **unidireccional** y **descendiente (hacia abajo)**, esto significa que **un componente padre puede pasar valores de su estado a componentes hijos que lo recibirán como propiedades**.

En el momento que los valores del estado del padre sufran cambios esto causará que tanto el padre como los hijos que recibieron esos valores como propiedades se rendericen nuevamente y reaccionen a dicho cambio.

Cada componente que se defina como una clase cuenta con un objeto para almacenar información llamado **state**.

**Cada vez que cambia el state React vuelve a renderizar (pintar) el componente en la vista**.

```JavaScript
class Welcome extends Component {
  constructor() {
    super();

    this.state = {
      title: "Hola Mundo",
    };
  }

  render() {
    return <h1>{this.state.title}</h1>;
  }
}
```

En este ejemplo estamos definiendo una componente `<Welcome />` que inicializa el estado con una llave title. En el método render estamos obteniendo el valor de esa llave con `this.state.title`.

Para cambiar el estado utiliza el método `setState`:

```JavaScript
this.setState({
  title: "Hello World",
});
```

- Hay un **ciclo de vida** del componente, que es:

- **Montado** (**Mounting**), la aplicación React carga en el navegador y se carga el componente.

- **Actualización**

- **Desmontaje**

---

# :star: 7 - Renderizado Condicional

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

# :star: 8 - Renderizado de Elementos

Puedes hacer colecciones de elementos e incluirlos en JSX usando llaves **{}**.

Recorriendo los elementos de un array y usando la función **map()** de Javascript.

Por ejemplo:

```JavaScript
const numeros = [1, 2, 3, 4, 5];
const listaElementos = numeros.map((numero) => <li>{numero}</li>);
```

Incluimos el array listaElementos dentro de un elemento `<ul>`, y lo renderizamos en el DOM:

```JavaScript
ReactDOM.render(<ul>{listaElementos}</ul>, document.getElementById("root"));
```

Refactorizamos el ejemplo anterior en un componente que acepte un array de numeros e imprima una lista de elementos.

```JavaScript
function ListaNumeros(props) {
  const numeros = props.numeros;
  const listaElementos = numeros.map((numero) => <li>{numero}</li>);
  return <ul>{listaElementos}</ul>;
}

const numeros = [1, 2, 3, 4, 5];
ReactDOM.render(
  <ListaNumeros numeros={numeros} />,
  document.getElementById("root")
);
```

Al ejecutar este código, serás advertido que una **key** debería ser proporcionada para elementos de lista.

Una **key** es un atributo especial de tipo string que debes incluir al crear listas de elementos.

**Las keys ayudan a React a identificar que elementos han cambiado, son agregados, o son eliminados**. Las keys deben ser dadas a los elementos dentro del array para darle una identidad estable.

La mejor forma de elegir una key es usando un string que identifique únicamente a un elemento de la lista entre sus hermanos. Habitualmente vas a usar los IDs de tus datos como key.

Cuando no tengas IDs estables para renderizar, puedes usar como key el índice de los elementos del array de datos como último recurso.

Las keys usadas dentro de arrays deberían ser únicas entre sus hermanos. Sin embargo, no necesitan ser únicas globalmente. Podemos usar las mismas keys cuando creamos dos o más arrays diferentes.

Entonces refactorizando nuestro código anterior quedaría así:

```JavaScript
function ListaNumeros(props) {
  const numeros = props.numeros;
  const listaElementos = numeros.map((numero, indice) => (
    <li key={indice}>{numero}</li>
  ));
  return <ul>{listaElementos}</ul>;
}

const numeros = [1, 2, 3, 4, 5];
ReactDOM.render(
  <ListaNumeros numeros={numeros} />,
  document.getElementById("root")
);
```

---

# :star: 9 - Eventos

Manejar eventos en React es muy similar a manejar eventos en el DOM. Sin embargo existen algunas diferencias de sintaxis:

Los eventos de React se nombran usando camelCase, en vez de minúsculas.
Con JSX pasas una función como el manejador del evento, en vez de un string.
Ejemplo, en HTML:

```JavaScript
<button onclick="cambiarIdioma()">Cambiar idioma</button>
```

Ejemplo, en React:

```JavaSCript
<button onClick="{cambiarIdioma}">Cambiar idioma</button>
```

Comeinzan siempre con **on**, se escriben **camelCase** y van sin los (), porque sino se ejecutarían ni bien se carga el componente, en vez de cuando se dispara el evento.

Y a las funciones se las puede llamar **handle** + **lo que maneja**, por eso tenemos, por ejemplo: **handleClick**.

Otra diferencia es que en React no puedes retornar false para prevenir el comportamiento por defecto. Debes, explícitamente, llamar **preventDefault**.

Por ejemplo, en nuestro ejemplo del componente `<Welcome />` visto en el tema del Estado podemos cambiarlo para que cuando hagan click sobre el h1 cambie el texto. Para eso vamos a definir un método **updateText** que vamos a invocar cuando hagan click sobre el h1:

```JavaScript
class Welcome extends Component {
  constructor() {
    super();

    this.state = {
      title: "Hola Mundo",
    };

    // tenemos que enlazar el método al contexto actual
    this.updateText = this.updateText.bind(this);
  }

  updateText() {
    this.setState({
      title: "Hello World",
    });
  }

  render() {
    return <h1 onClick={this.updateText}>{this.state.title}</h1>;
  }
}
```

## Property initializers

:tv: -> [Documentacion](https://reactjs.org/blog/2015/01/27/react-v0.13.0-beta-1.html#es7-property-initializers)

## Eventos sintéticos

[Documentación de React](https://es.reactjs.org/docs/events.html).

Los atributos de eventos son para las etiquetas JSX, no para los componentes como tal.

Si quiero asignar un evento a un componente tengo que crear una prop (Evento Personalizado).

---

# :star: 10 - Comunicación entre componentes

Es **one way data banding**.

Tenemos 3 casos de comunicación entre los componentes de React:

- **1** - Comunicación entre un componente padre a uno hijo (**props**).

- **2** - Comunicación entre un componente hijo y su padre(**eventos** / **states**).

- **3** - Comunicación entre componentes no relacionados.

## 1 - Comunicación entre un componente padre a uno hijo.

Éste es el caso más natural en el mundo de React y se hace a través del paso de **props** de un componente padre a uno hijo.

```JavaScript
import React, { Component } from "react";

class Padre extends Component {
  render() {
    return (
      <div>
        <Hijo mensaje="Mensaje para el hijo 1" />
        <Hijo mensaje="Mensaje para el hijo 2" />
      </div>
    );
  }
}

function Hijo(props) {
  return <h2>{props.mensaje}</h2>;
}

export default Padre;
```

## 2 - Comunicación entre un componente hijo y su padre.

Cuando tenemos la necesidad de que un componente hijo mande datos a su padre los podemos hacer a traves de los eventos, simplemente pasamos una **función como prop** del componente padre al componente hijo, y éste ejecutará la función .

En este ejemplo, cambiaremos el estado del componente padre pasando una función al componente hijo e invocando esa función dentro del componente hijo.

```JavaScript
import React, { Component } from "react";

class Padre extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };

    this.incrementarContador = this.incrementarContador.bind(this);
  }

  incrementarContador(e) {
    //el contexto del evento proviene del Hijo
    this.setState({ contador: this.state.contador++ });
  }

  render() {
    return (
      <div>
        <Hijo
          mensaje="Mensaje para el hijo 1"
          incrementarContador={incrementarContador}
        />
        <Hijo
          mensaje="Mensaje para el hijo 2"
          incrementarContador={incrementarContador}
        />
      </div>
    );
  }
}

function Hijo(props) {
  return (
    <div>
      <h2>{props.mensaje}</h2>
      <button onClick={props.incrementarContador}>+</button>
    </div>
  );
}

export default Padre;
```

## 3 - Comunicación entre componentes no relacionados.

Si los componentes no tienen una relación padre-hijo o están relacionados, pero están demasiado lejos, como por ejemplo, un bisnieto o tataranieto, tenemos que **crear un mecanismo de observación y/o suscripción para la comunicación entre dichos componentes**.

Al menos existen 3 patrones para hacer esto.

- 1 **Patrón Emisor de eventos / Destino / Despachador** : los oyentes deben hacer referencia a la fuente para suscribirse.

- 2 **Patrón Publicación / Suscripción**: no necesita una referencia específica a la fuente que desencadena el evento, hay un objeto global accesible en todas partes que maneja todos los eventos.

- 3 **Patrón Señales**: similar al Emisor de Eventos, pero aquí no usa cadenas aleatorias. Cada objeto que podría emitir eventos debe tener una propiedad específica con ese nombre. De esta manera, se sabe exactamente qué eventos puede emitir un objeto.

- 4 **Portales**: proporcionan una opción de primera clase para renderizar hijos en un nodo DOM que existe por fuera de la jerarquía del DOM del componente padre.
  Puedes encontrar más información al respecto en este enlace.

Otra manera de compartir datos entre componentes sin que tengan una relación padre-hijo es compartiendo un **estado global accesible para todos los componentes de nuestra aplicación**, para ello podríamos usar 2 opciones:

1-**Redux**: librería externa a React para el manejo del estado.

2-**Context**: un API interna de React que provee una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel. Esta API la retomaremos cuando veamos el tema de Hooks.

---

# :star: 11 - Ciclo de Vida

Son métodos que se ejecutan automáticamente en un Componente de Clase, ocurren en 3 fases:

- Montaje.

- Actualización.

- Desmontaje

Al inicio estaba en los **componentes de clase**, con los **componentes funcionales** y le **useEffect** podemos replicar ete ciclo de vida.

## Montaje (Mounting)

Estos métodos se ejecutan cuando se crea un componente y se inserta en el arbol del DOM.

- **constructor()**: Se ejecuta al crear la instancia del componente, en el constructor puedes inicializar el estado y enlazar manejadores de eventos.

- **render()**: Es el único método requerido, cuando se ejecuta, examina el estado y las propiedades y dibuja el componente en el árbol del DOM.

- **componentDidMount()**: Se invoca inmediatamente después de que un componente se ha insertado al árbol del DOM. Es útil para ejecutar suscripciones o peticiones asíncronas a API's, bases de datos, servicios, etc.

## Actualización

Estos métodos son ejecutados por cambios en el estado o las propiedades de los componentes.

- **render(**): redibuja el componente cuando detecta cambios en el estado o las propiedades del componente.

- **componentDidUpdate()**: Se ejecuta inmediatamente después de que la actualización del estado o las propiedades sucede, al igual que componenDidUpdate es un método ideal para hacer peticiones externas.

## Desmontaje

Estos métodos son ejecutados una vez que el componente ha sido eliminado del árbol del DOM.

- **componentWillUnmount()**: Se ejecuta antes de destruir el componente del árbol del DOM, es un método útil para hacer tareas de limpieza.

---

# :star: 12 - Hooks

Los Hooks son una nueva incorporación a partir de **React 16.8.0**, que nos permiten **enganchar** el estado y el ciclo de vida en componentes basados en funciones.

## ¿Por qué se crearon los Hooks?

**Las clases confunden a las personas y a las máquinas**.

Entender la estructura y reglas que implican crear una clase puede ser una curva de aprendizaje lenta y requerir de ciertos conceptos, como el manejo de this en JavaScript, por el contrario las funciones son muy fáciles de entender y manipular incluso para personas que van comenzando.

A las máquinas tampoco les gusta las clases ya que no minifican tan bien como las funciones, esto significa que nuestro código ocupará más texto y por ende más espacio de almacenamiento.

## Preguntas frecuentes

- ¿Los hooks hacen que mi aplicación sea más rápida? **NO**.

- ¿Los hooks hacen algo que un Componente de Clase no pueda hacer? **NO**.

- ¿Los Componentes de Clase van a desaparecer? **NO**.

- ¿Mi conocimiento del estado, las propiedades y los eventos serán obsoleto ahora con hooks? **NO**.

- ¿Debo reescribir todas mis aplicaciones React, ahora con hooks? **Probablemente NO**.

- ¿Debo implementar hooks en mi próximo proyecto? **Probablemente SÍ**.

## Tipos de Hooks

- Básicos (en el 100% de tus proyectos): **useState** (para manejar el estado en componentes funcionales) y **useEffect** (para simular el ciclo de vida de los componentes de clase).

- Avanzados (tal vez no en todos tus proyectos): **useContext**, **useRef**, **useReducer**, **useCallback** y **useMemo**.

Puedes ver toda la lista de hooks disponibles en la [documentación](https://reactjs.org/docs/hooks-reference.html) de React.

## <img src="https://img.icons8.com/external-justicon-flat-justicon/30/null/external-hook-pirates-justicon-flat-justicon.png"/> useState

Permite manipular el estado de un componente funcional, se comporta como el objeto state y a la función this.setState de los componentes de clase.

Para usarlo, debemos **importarlo desde la librería de React**:

```JavaScript
import React, { useState } from "react";
```

Ahora, en nuestro componente funcional, vamos a **inicializar el hook**, para ello asignaremos mediante la destructuración de arreglos 2 elementos:

1. El valor del estado y

2. Un método para actualizarlo (por convension se llama **set**+ **el nombre que usamos para el valor**)

Adicionalmente le pasaremos como parámetro el **valor inicial** del estado al método **useState**.

```JavaScript
import React, { useState } from "react";

export default function Componente() {
  const [valor, setValor] = useState(0);

  return <span>El valor del componente es {valor}</span>;
}
```

Para actualizar el estado tenemos que utilizar el método resultante de la destructuración de useState y pasarle el nuevo valor.

```JavaScript
import React, { useState } from "react";

export default function Componente() {
  const [valor, setValor] = useState(0);
  return (
    <div>
      <span>El valor del componente es {valor}</span>
      <button onClick={() => setValor(valor + 1)}>Aumentar valor</button>
    </div>
  );
}
```

Un detalle del estado en los Hooks, es que no debe ser tratado como un objeto como en los componentes de clases, **si necesitas más de un valor cada uno debe ser almacenado en una variable diferente y usar la destructurción de useState**.

```JavaScript
import React, { useState } from "react";

export default function Componente() {
  const [valor, setValor] = useState(0);
  const [valor2, setValor2] = useState("Hola Mundo");
  const [valor3, setValor3] = useState(true);

  return (
    <div>
      <span>El valor del componente es {valor}</span>
      <button onClick={() => setValor(valor + 1)}>Aumentar valor</button>
    </div>
  );
}
```

## <img src="https://img.icons8.com/external-justicon-flat-justicon/30/null/external-hook-pirates-justicon-flat-justicon.png"/> useEffect

Permite hacer uso del **ciclo de vida en un componente funcional**. Usar useEffect equivale a la combinación de los métodos:

- **componentDidMount()** (montaje).

- **componentDidUpdate()** (actualización).

- **componentWillUnmount()** (desmontaje).

useEffect recibe como parámetro **una función que se ejecutará cada vez que nuestro componente se renderice**, ya sea por cambios del estado o las propiedades.

Para usarlo, debemos **importarlo desde la librería de React**:

```JavaScript
import React, { useEffect } from "react";
```

Para añadir un efecto que se ejecutará cada vez que nuestro componente se renderice, se debe pasar como parámetro una **función** al hook useEffect misma que se ejecutará al renderizarse el componente.

```JavaScript
import React, { useEffect } from "react";

export default function Efecto() {
  useEffect(function () {
    console.log("Me he renderizado!!!");
  });

  return <span>Este es un ejemplo del hook useEffect.</span>;
}
```

Con useEffect también podemos suscribirnos y desuscribirnos a eventos, temporizadores, servicios, API's, etc.

Para ello hay que escribir el código de la suscripción en el cuerpo de la función de useEffect y para evitar problemas de rendimiento o aumento indiscriminado de la memoria y recursos de nuestra aplicación **retornar en una función el código que desuscriba o cancele lo que se ejecuto en el cuerpo de la función**.

```JavaScript
import React, { useEffect, useState } from "react";

export default function ScrollYNavegador() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    //Creamos una función para actualizar el estado
    const actualizarScrollY = () => {
      let scrollY = window.pageYOffset;
      console.log(`scrollY: ${scrollY}`);
      setScrollY(scrollY);
    };
    //Actualizamos el scroll al montar el componente
    actualizarScrollY();
    //Nos suscribimos al evento scroll de window
    window.addEventListener("scroll", actualizarScrollY);

    //Devolvemos una función para desuscribir el evento
    return () => {
      window.removeEventListener("scroll", actualizarScrollY);
    };
  });

  return (
    <div>
      <span>ScrollY del Navegador: {scrollY}px</span>
    </div>
  );
}
```

Por defecto los efectos se ejecutan cada vez que se realiza un renderizado, si queremos evitar actualizaciones innecesarias o indiscriminadas podemos pasarle un **segundo parámetro al hook**.

El parámetro debe ser un **array con todos los valores de los que dependerá el efecto** (**dependency array**), de forma que sólo se ejecutará cuando ese valor cambie.

```JavaScript
import React, { useEffect, useState } from "react";

export default function ScrollYNavegador() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    //Creamos una función para actualizar el estado
    const actualizarScrollY = () => {
      let scrollY = window.pageYOffset;
      console.log(`scrollY: ${scrollY}`);
      setScrollY(scrollY);
    };
    //Actualizamos el scroll al montar el componente
    actualizarScrollY();
    //Nos suscribimos al evento scroll de window
    window.addEventListener("scroll", actualizarScrollY);

    //Devolvemos una función para desuscribir el evento
    return () => {
      window.removeEventListener("scroll", actualizarScrollY);
    };
  }, [scrollY]);

  return (
    <div>
      <span>ScrollY del Navegador: {scrollY}px</span>
    </div>
  );
}
```

Si le pasamos un **array vacío**, eso hará que el efecto no dependa de ningún valor, por lo que **sólo se ejecutará al montarse y desmontarse el componente**.

```JavaScript
import React, { useEffect, useState } from "react";

export default function ScrollYNavegador() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    //Creamos una función para actualizar el estado
    const actualizarScrollY = () => {
      let scrollY = window.pageYOffset;
      console.log(`scrollY: ${scrollY}`);
      setScrollY(scrollY);
    };
    //Actualizamos el scroll al montar el componente
    actualizarScrollY();
    //Nos suscribimos al evento scroll de window
    window.addEventListener("scroll", actualizarScrollY);

    //Devolvemos una función para desuscribir el evento
    return () => {
      window.removeEventListener("scroll", actualizarScrollY);
    };
  }, []);

  return (
    <div>
      <span>ScrollY del Navegador: {scrollY}px</span>
    </div>
  );
}
```

---

# :star: 13 - Aprende más

[Acá está el link de los videos de JonMircha](https://www.youtube.com/playlist?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk)

---
