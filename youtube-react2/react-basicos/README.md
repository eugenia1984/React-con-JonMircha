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

# :start: Mis anotaciones

Es similar al HTML, peor es **JS** por eso tiene el atributo **className** ya que no se puede usar **class** por ser una palabra reservada.

Se pueden crear estructuras de control (for, if/else) , crear variables, aceptar argumentos, retornar funciones, hacer expresiones.

- Algunos atributos HTMl cambian:

**class** -> **className**

**for** como atributo en el ```<form>``` -> **htmlFor**

JSX se parece mucho a xml, ya que todas las etiquetas hay que cerrarlas, por ejemplo la de imagen queda : ```<img ... />```

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