
# <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> 8 - Renderizado de Elementos

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

### <img width="64" height="64" src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/external-note-pad-user-interface-flatart-icons-flat-flatarticons.png" alt="note pad"/>  MIS ANOTACIONES

#### <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> Renderizado de elementos

Podes renderizar un **array**.

Es importante que cada uno tenga su **key**, va a ser su id unico que lo identifique para tener la referencia exacta en el virtual DOm y poder actualizar el elemento en el DOM real.

Creo el componente **RenderizadoElementos.js**

```JSX
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

Cuando necesitamos pintar elementos de manera dinamica **cada elemento de la lista debe de tener una llave unica**.

El atributo **key** lo utiliza React en su sintaxis JSX para asignarle un id y le sea más rápida la busqueda en su virtual DOM del elemento que si sufre un cambio tendra que volver a renderizar. Por eso en la etqieute `<li>` tengo **key={el}**, esta key es un atributo que no existe para el DOM:

```JSX
<ol>
  {this.state.seasons.map((el) => (
    <li key={el}>{el}</li>
  ))}
</ol>
```

Otro modo es darle como key el **index** para que la key sea el elemento dle arreglo:

```JSX
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

```JSX
function ElementoLista(props) {
  return(
    <li>
      <a href={props.el.web} target="_blank">{props.el.name}</a>
    </li>
  )
}
```

Y dentro del **return** del elemento **RenderizandoElementos**, renderizo una lista desordenada con cada uno de los Frameworks, que van a ser los list items que son un anchor (llink).

```JSX
<ul>
  {
    data.frameworks.map((el)=> (
      <ElementoLista key={el.id} el={el}/>
  ))}
</ul>
```

---