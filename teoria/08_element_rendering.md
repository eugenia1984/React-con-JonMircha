
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