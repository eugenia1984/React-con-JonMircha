# Curso de React con Jon Mircha

---

Temas:

- Introduccion : 

¿Por qué usarlo?

¿ Quien lo usa ?

Entorno y Herramientas de Desarrollo.

- Create React App

¿Qué incluye create-react-app?

Estructura de carpeta

Hot reloading

- JSX

JSX se transforma en JavaScript

Mezclando JSX con JavaScript

---

# :star:  Introducción

React es una biblioteca JavaScript altamente eficiente y declarativa que se utiliza para crear interfaces de usuario interactivas.

Fue creado por el ingeniero de Facebook Jordan Walke y se lanzó en mayo de 2013.

En los últimos años, ha superado a sus rivales y ha establecido firmemente su dominio.

React te insita a crear código declarativo (indicas el qué, no el cómo) y orientado a componentes.

Un componente es un pieza de código que puede representar una parte de la interfaz de usuario o una funcionalidad en particular que se puede encapsular y reutilizar en diferentes partes de un desarrollo o incluso en diferentes aplicaciones.

Cada componente reaccionará a cambios internos (en su estado) o externos (nuevas propiedades recibidas) y se volvera a redibujar (renderizado) en la interfaz. Para ello React utiliza su Virtual DOM que es una copia del DOM original del navegador para sólo hacer los cambios necesarios en los nodos que hayan reaccionado y evitar redibujar todo el árbol del DOM.

Para poder interactuar con la interfaz React tiene eventos sintéticos que son una abstracción de los eventos nativos de los navegadores, para mejorar la compatibilidad y evitar el uso de librerías para crossbrowsing (bye bye jQuery 🤭).

---

##  ¿Por qué usarlo?

**Ventajas**:

Alto rendimiento: React es conocido por su alta eficiencia y flexibilidad. Se puede integrar fácilmente con diferentes tecnologías. Se puede usar tanto para el lado del cliente como para el lado del servidor.

Recursos abundantes : como Facebook la mantiene, existe una gran cantidad de documentación y recursos disponibles en la web que hace que la curva de aprendizaje sea muy fluida.

Compatibilidad con versiones anteriores : la transición o migración de versiones anteriores a nuevas es bastante fácil y retrocompatible.
Estructura de componentes fácil de mantener: la arquitectura basada en componentes de React ayuda a aumentar la reutilización del código y facilita bastante el mantenimiento de proyectos a gran escala.

Fuerte Comunidad: React tiene más de 1300 colaboradores en GitHub.
Documentación Multi idioma: Actualmente React tiene su documentación en diferentes idiomas entre ellos el español.

Flujo de datos unidireccional: el enlace de datos unidireccional y hacia abajo (de componentes padres a hijos), ayuda a garantizar que los cambios realizados en la estructura del componente hijo no afecten la estructura del componente padre.

**Desventajas**:

Complejo: muchos desarrolladores pueden encontrar en un inicio demasiado compleja la curva de aprendizaje de React en comparación con otros frameworks como el caso de Vue. Dicha complejidad puede ser innecesaria para proyectos a pequeña escala.
JSX: el uso de JSX agrega otra capa de complejidad. JSX es un preprocesador que agrega extensión de sintaxis XML a JavaScript. Aunque JSX ayuda a codificar el código React de una manera más segura y rápida, puede ser difícil de comprender para los nuevos desarrolladores.

Necesidad de un ecosistema de muchas herramientas: React requiere una amplia gama de herramientas para funcionar correctamente y ser compatible con otras tecnologías.
Problemas de SEO: se sabe que las SPAs (Single Page Applications) creadas con React se enfrentan a problemas de indexación por parte de los rastreadores y bots de motores de búsqueda.

---

## ¿Quién lo usa?

Grandes empresas como Netflix, Yahoo, Airbnb, Instagram, Facebook, WhatsApp, PayPal, Microsoft, la BBC, Aeroméxico, etc. Incluso grandes sitios de información y noticias que antes usaban WordPress se están migrando a sitios hechos con JAM stack y React como librería principal, tal es el caso de Smashing Magazine.

Estadísticas que respaldan su uso:

[Google Trends](https://trends.google.com.mx/trends/explore?q=react,angular,vue)

[NPM Trends](https://www.npmtrends.com/react-vs-angular-vs-vue)

[Stack Overflow Trends](https://insights.stackoverflow.com/trends?tags=reactjs%2Cangular%2Cvue.js)

[State of JavaScript](https://2020.stateofjs.com/en-US/)

---

## Entorno y Herramientas de Desarrollo

React es una librería y no técnicamente un framework. Por lo que sólo maneja la capa de Vista, tomando como referencia el modelo MVC (Modelo Vista Controlador) para el desarrollo de aplicaciones web. Sin embargo cuenta con una amplia gama de herramientas, librerías y frameworks para complementar su entorno de desarrollo, por ejemplo:

Node.js y NPM: Para ejecutar el entorno de desarrollo e instalar dependencias.

Yarn: Un gestor de paquetes JavaScript.

Webpack: Es un empaquetador de archivos para aplicaciones JavaScript.

React Router: Librería para manejar rutas declarativas.

Redux: Es una librería para gestionar el estado de las aplicaciones JavaScript.

Flux: Es la arquitectura de aplicaciones que Facebook usa para crear aplicaciones web del lado del cliente.

Create React App: Un conjunto de configuraciones preestablecidadas para comenzar a trabajar con React ejecutando un sólo comando.

Gatsby: Es un framework basado en React para desarrollar rápidamente sitios y aplicaciones web, usando diferentes fuentes de datos como CMS, Markdowns, APIs, etc.

Next.js: Es un framework basado en React para desarrollar sitios estáticos y aplicaciones del lado del servidor (SSR - Server Side Rendering).

GraphQL: Es un lenguaje de consulta de datos para APIs.

React Bootstrap: Es la versión del popular framework frontend Bootstrap pero creado con componentes hechos en React.

Material UI: Es un framework frontend inspirado en Material Design creado con componentes hechos en React.

React Native: Es un framework basado en React para la creación de aplicaciones móviles y nativas.

React Dev Tools Chrome: Es una extensión para Chrome que agrega de herramientas de depuración para React.

React Dev Tools Firefox: Es una extensión para Firefox que agrega de herramientas de depuración para React.

Simple React Snippets for VSCode: Es una extensión para Visual Studio Code que nos permite usar atajos para agilizar la escritura de código React.

---

# :star: Create React App

Aunque existen varias formas de empezar con React, una manera sencilla y eficiente es con create-react-app, una aplicación de consola que nos va a permitir crear aplicaciones React con cero configuración, lo que nos permitirá centrarnos en los más importante: Programar en React.

Para crear una aplicación utilizamos el comando npx create-react-app seguido del nombre que le quieras dar a tu aplicación. Por ejemplo:

```
npx create-react-app my-app
```

Cuando ejecutas ese comando create-react-app va a crear una carpeta llama my-app con una serie de archivos y subcarpetas para que puedas empezar a trabajar en tu proyecto.

Ingresa a la carpeta my-app y ejecuta el proyecto con los siguientes comandos:

```
cd my-app
npm start
```

El último comando ejecuta el servidor de desarrollo y abre un navegador con una pantalla de bienvenida.

¡Felicidades!, has creado tu primera aplicación con React.


---

##  ¿Qué incluye create-react-app?

Un proyecto creado con create-react-app, además de React, incluye librerías como:

- Webpack: que se encarga de procesar y empaquetar nuestro código JavaScript (con sus dependencias), archivos CSS y otros archivos estáticos como imágenes, vectores, fuentes, etc.

- Babel: que nos permite usar nuevas características de ECMAScript.

- PostCSS que es una librería para el procesamiento de CSS.

- Jest que es una librería para testing.

- etc.

Uno podría configurar un proyecto de React manualmente e incluir cada una de estas librerías, pero es bastante engorroso, create-react-app nos hace la vida más fácil.

---

## Estructura de carpeta

```create-react-app``` crea la siguiente estructura de archivos y carpetas:

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

Dentro de **src** se incluyen todos los archivos JavaScript y CSS de tu aplicación.

También es recomendable incluir otros archivos estáticos como imágenes y fuentes en esta carpeta. Puedes crear subcarpetas para organizar mejor los archivos.

En **public** van todos los archivos estáticos que necesites incluir en la plantilla **public/index.htm**l.

Puedes crear otras carpetas además de **src** y **public**. Estas carpetas no van a ser incluídas en el paquete de distribución.


### Scripts

En la carpeta del proyecto puedes ejecutar los siguientes comandos:

```npm start``` - inicia el servidor de desarrollo y abre un navegador con la aplicación.

```npm test``` - ejecuta las pruebas.

```npm run build``` - empaqueta la aplicación para producción en la carpeta build.

```npm run eject``` - permite cambiar manualmente las librerías y configuración que utiliza ```create-react-app``` por defecto. Ten cuidado con este comando, una vez que se expulsa la configuración inicial no hay vuelta atrás.

---

## Hot reloading

Una de las funcionalidades más importantes de los proyectos creados con create-react-app es la capacidad de hacer cambios en vivo sin necesidad de reiniciar el servidor. Si haces un cambio en algún archivo en src o public el navegador se refresca automáticamente.

---

# :star: JSX

Es una extensión de la sintaxis de JavaScript que produce elementos de React.

Se puede usar:

Dentro de estructuras de control como if y for.
Asignarlo a variables.
Aceptarlo como argumento o retorno en funciones.
Expresiones JavaScript.
Veamos un ejemplo tomado del código que genera create-react-app:

```
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

Toda etiqueta debe cerrarse por ejemplo ```<br>``` debera cerrarse a ```<br />```.

Los componentes deben devolver un sólo elemento padre.

Algunos atributos HTML cambian como:

class por className.

for por htmlFor.

Los atributos de un elemento JSX pueden aceptar valores de tipo String entrecomillados o expresiones JavaScript entre llaves, por ejemplo:
```<img alt="Avatar" src={user.avatarURL} />```

---
## JSX se transforma en JavaScript


Por debajo JSX se transforma en código JavaScript. Por ejemplo, el siguiente código JSX.

```<div class="active">Hola Mundo</div>```

se transforma en el siguiente código JavaScript:

```React.createElement("div", { className: "active" }, "Hola mundo");```

Puedes utilizar el REPL de Babel para ver en qué se convierte el código JSX que escribes.

La ventaja de JSX es que, como es JavaScript, podemos:

Ver algunos errores en tiempo de compilación.

Asignar JSX a variables. Por ejemplo:

```JavaSCript
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

Una restricción de JSX es que siempre debes tener un elemento raíz:

```JavaScript
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

Para mezclar código JavaScript en JSX utiliza corchetes ({}):

```
const style = "active";
const title = "Hola Mundo";

<div className={style}>{title}</div>;
```

Una restricción de JSX es que no puedes utilizar if, else, while o for.

Para agregar condicionales utiliza el operador ternario:

```JavaScript
<div>
  {
    condition
      ? <h1>Hola Mundo</h1>
      : null
  }
</div>
```

Para mostrar elementos de un arreglo o un objeto utiliza map:

```JavaScript
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
