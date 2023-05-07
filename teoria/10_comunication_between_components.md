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
