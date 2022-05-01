# :star: Mis anotaciones

Es similar al HTML, peor es **JS** por eso tiene el atributo **className** ya que no se puede usar **class** por ser una palabra reservada.

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